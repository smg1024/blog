{
	description = "Dev with Min personal Astro blog";

	inputs = {
		nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
	};

	outputs = { nixpkgs, ... }:
		let
			systems = [
				"x86_64-linux"
				"aarch64-linux"
				"x86_64-darwin"
				"aarch64-darwin"
			];

			forAllSystems = nixpkgs.lib.genAttrs systems;
		in
		{
			packages = forAllSystems (system:
				let
					pkgs = import nixpkgs { inherit system; };
					lib = pkgs.lib;
					pname = "dev-with-min";
					version = "0.1.0";
					bunPlatform = {
						x86_64-linux = {
							os = "linux";
							cpu = "x64";
							hash = "sha256-X8eDTCUFM897ZEb+kdS8fYBhOQZ1GDaH6ljaZBayYTE=";
						};
						aarch64-linux = {
							os = "linux";
							cpu = "arm64";
							hash = lib.fakeHash;
						};
						x86_64-darwin = {
							os = "darwin";
							cpu = "x64";
							hash = lib.fakeHash;
						};
						aarch64-darwin = {
							os = "darwin";
							cpu = "arm64";
							hash = "sha256-VD953ifWAl54vhS1+6OLpJQsIm9rqtsvF8Gpl45CijQ=";
						};
					}.${system};
					bunPlatformFlags = "--os=${bunPlatform.os} --cpu=${bunPlatform.cpu}";

					src = lib.cleanSourceWith {
						src = ./.;
						filter = path: type:
							let
								name = baseNameOf path;
							in
							!(builtins.elem name [
								".astro"
								".direnv"
								"dist"
								"node_modules"
								"result"
							]);
					};

					bunDeps = pkgs.stdenvNoCC.mkDerivation {
						pname = "${pname}-bun-deps";
						inherit version src;

						nativeBuildInputs = [ pkgs.bun ];
						dontConfigure = true;
						dontBuild = true;

						installPhase = ''
							runHook preInstall

							export HOME="$TMPDIR"
							mkdir -p "$out"
							bun install \
								--frozen-lockfile \
								--ignore-scripts \
								--no-progress \
								--backend=copyfile \
								${bunPlatformFlags} \
								--cache-dir "$out"

							runHook postInstall
						'';

						outputHashAlgo = "sha256";
						outputHashMode = "recursive";
						outputHash = bunPlatform.hash;
					};
				in
				{
					default = pkgs.stdenvNoCC.mkDerivation {
						inherit pname version src;

						nativeBuildInputs = [ pkgs.bun ];
						dontConfigure = true;

						buildPhase = ''
							runHook preBuild

							export HOME="$TMPDIR"
							export ASTRO_TELEMETRY_DISABLED=1

							cp -R "${bunDeps}" "$TMPDIR/bun-cache"
							chmod -R u+w "$TMPDIR/bun-cache"

							bun install \
								--frozen-lockfile \
								--ignore-scripts \
								--no-progress \
								--offline \
								--backend=copyfile \
								${bunPlatformFlags} \
								--cache-dir "$TMPDIR/bun-cache"
							bun run build

							runHook postBuild
						'';

						installPhase = ''
							runHook preInstall

							mkdir -p "$out/share/dev-with-min" "$out/nix-support"
							cp -R dist/. "$out/share/dev-with-min/"
							ln -s "$out/share/dev-with-min" "$out/public"
							printf 'siteRoot=%s\n' "$out/share/dev-with-min" > "$out/nix-support/site-root"

							runHook postInstall
						'';

						passthru.sitePath = "share/dev-with-min";

						meta = {
							description = "Static Astro build of the Dev with Min personal developer blog";
							homepage = "https://blog.ridewithmin.com";
							platforms = systems;
						};
					};
				});

			devShells = forAllSystems (system:
				let
					pkgs = import nixpkgs { inherit system; };
				in
				{
					default = pkgs.mkShell {
						packages = [ pkgs.bun ];
						ASTRO_TELEMETRY_DISABLED = "1";
					};
				});
		};
}
