{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        python = (pkgs.python3.withPackages
          (ps: with ps; [
            pytest
            pytest-cache
            pytest-subtests
            jupyter
          ]));
      in
      {
        devShells = {
          default = pkgs.mkShell {
            packages = with pkgs; [
              nodejs_20
              typescript
              python
            ];
            shellHook = ''
              ln -sf ${python} .venv
            '';
          };
        };
      });
}
