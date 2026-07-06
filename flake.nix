{
  description = "Dev with Min personal Astro blog";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = {nixpkgs, ...}: let
    systems = [
      "x86_64-linux"
      "aarch64-darwin"
    ];

    forAllSystems = nixpkgs.lib.genAttrs systems;
  in {
    packages = forAllSystems (system: let
      pkgs = import nixpkgs {inherit system;};
    in {
      default = pkgs.callPackage ./package.nix {};
    });

    formatter = forAllSystems (system: let
      pkgs = import nixpkgs {inherit system;};
    in
      pkgs.writeShellApplication {
        name = "alejandra-format";
        runtimeInputs = [pkgs.alejandra];
        text = ''
          if [ "$#" -eq 0 ]; then
            set -- .
          fi

          exec alejandra "$@"
        '';
      });

    devShells = forAllSystems (system: let
      pkgs = import nixpkgs {inherit system;};
    in {
      default = pkgs.mkShell {
        packages = [
          pkgs.alejandra
          pkgs.bun
        ];
        ASTRO_TELEMETRY_DISABLED = "1";
      };
    });
  };
}
