{
  lib,
  stdenvNoCC,
  bun,
  nodejs,
}: let
  pname = "dev-with-min";
  version = "0.1.0";
  system = stdenvNoCC.hostPlatform.system;

  bunPlatforms = {
    x86_64-linux = {
      os = "linux";
      cpu = "x64";
      hash = "sha256-30KsLPkXFGrVzks6Jevs9uQhhqNTnpc4eR/FQOwqo0A=";
    };
    aarch64-darwin = {
      os = "darwin";
      cpu = "arm64";
      hash = "sha256-04ry8EXuavRZV1+6eYyH/XzEnf7grKeLF/9Yq6sqiG0=";
    };
  };

  bunPlatform =
    bunPlatforms.${system}
      or (throw "Unsupported blog package system: ${system}");
  bunPlatformFlags = "--os=${bunPlatform.os} --cpu=${bunPlatform.cpu}";

  src = lib.cleanSourceWith {
    src = ./.;
    filter = path: type: let
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

  nodeModules = stdenvNoCC.mkDerivation {
    pname = "${pname}-node-modules";
    inherit version src;

    nativeBuildInputs = [bun];
    dontConfigure = true;
    dontFixup = true;

    buildPhase = ''
      runHook preBuild

      export HOME="$TMPDIR"
      export BUN_INSTALL_CACHE_DIR="$TMPDIR/bun-cache"
      mkdir -p "$BUN_INSTALL_CACHE_DIR"

      bun install \
        --frozen-lockfile \
        --ignore-scripts \
        --no-progress \
        --backend=copyfile \
        ${bunPlatformFlags}

      runHook postBuild
    '';

    installPhase = ''
      runHook preInstall

      mkdir -p "$out"
      cp -R node_modules "$out/node_modules"

      runHook postInstall
    '';

    outputHashAlgo = "sha256";
    outputHashMode = "recursive";
    outputHash = bunPlatform.hash;
  };
in
  stdenvNoCC.mkDerivation {
    inherit pname version src;

    nativeBuildInputs = [
      bun
      nodejs
    ];
    dontConfigure = true;

    ASTRO_TELEMETRY_DISABLED = "1";

    preBuild = ''
      export HOME="$TMPDIR"

      cp -R "${nodeModules}/node_modules" ./node_modules
      chmod -R u+w node_modules
      patchShebangs node_modules/.bin node_modules/astro/bin
    '';

    passthru = {
      inherit nodeModules;
      sitePath = "share/dev-with-min";
    };

    meta = {
      description = "Static Astro build of the Dev with Min personal developer blog";
      homepage = "https://blog.ridewithmin.com";
      platforms = builtins.attrNames bunPlatforms;
    };
  }
