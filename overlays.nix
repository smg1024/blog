# Bun's default x86_64-linux binary requires AVX2 and dies with SIGILL on
# older CPUs; the "baseline" release build does not. Swap the source archive
# for the baseline zip, as suggested in
# https://github.com/NixOS/nixpkgs/pull/313760#issuecomment-2365160954
# The version is pinned so a nixpkgs bump fails at eval time instead of
# silently mixing bun versions. Update both fields together:
#   nix store prefetch-file https://github.com/oven-sh/bun/releases/download/bun-v<version>/bun-linux-x64-baseline.zip
final: prev: let
  bunBaselineVersion = "1.3.13";
  bunBaselineHash = "sha256-nYokKSpwaAkCBdqsCloiP19pc29Sh+N7+I07QDHtx1A=";
in {
  bun =
    if prev.stdenv.hostPlatform.system != "x86_64-linux"
    then prev.bun
    else
      assert prev.lib.assertMsg (prev.bun.version == bunBaselineVersion)
      "bun baseline override is pinned to ${bunBaselineVersion} but nixpkgs ships bun ${prev.bun.version}; update bunBaselineVersion and bunBaselineHash in overlays.nix";
        prev.bun.overrideAttrs (old: {
          passthru =
            old.passthru
            // {
              sources =
                old.passthru.sources
                // {
                  x86_64-linux = final.fetchurl {
                    url = "https://github.com/oven-sh/bun/releases/download/bun-v${bunBaselineVersion}/bun-linux-x64-baseline.zip";
                    hash = bunBaselineHash;
                  };
                };
            };
        });
}
