# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.194.0/containers/javascript-node
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-18


# Install additional Node packages globally
RUN npm install vite
