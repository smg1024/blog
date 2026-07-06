.PHONY: all build deps install clean

BUN ?= bun
BUN_INSTALL_FLAGS ?= --frozen-lockfile
BUN_PLATFORM_FLAGS ?=
SITE_DIR ?= share/dev-with-min

all: build

deps:
	ASTRO_TELEMETRY_DISABLED=1 $(BUN) install $(BUN_INSTALL_FLAGS) $(BUN_PLATFORM_FLAGS)

build:
	ASTRO_TELEMETRY_DISABLED=1 $(BUN) run build

install:
	@test -n "$(out)" || { echo "error: out is not set (run inside the Nix build)"; exit 1; }
	mkdir -p "$(out)/$(SITE_DIR)" "$(out)/nix-support"
	cp -R dist/. "$(out)/$(SITE_DIR)/"
	ln -s "$(out)/$(SITE_DIR)" "$(out)/public"
	printf 'siteRoot=%s\n' "$(out)/$(SITE_DIR)" > "$(out)/nix-support/site-root"

clean:
	rm -rf .astro dist
