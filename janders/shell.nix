{pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  nativeBuildInputs = with pkgs; [
    nodejs
    nodePackages.typescript-language-server
    nodePackages.prettier
  ];

  PATH="${pkgs.nodePackages.typescript-language-server}/bin:$PATH";
}
