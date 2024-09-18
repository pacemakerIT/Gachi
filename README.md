# Project Setup Guide

This project uses [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) to manage the Node.js version. Before starting, please ensure you are using the correct version of Node.js specified in the `.nvmrc` file.

## Prerequisites

Make sure you have NVM installed. If you don’t have it installed, you can install it using the following command:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

After installation, restart your terminal and verify the installation with:

```bash
nvm --version
```

## Using the Correct Node.js Version

Once NVM is installed, follow these steps to set the correct Node.js version:

1. Navigate to the project folder:
2. Run the following command to automatically use the Node.js version specified in the .nvmrc file:

```bash
nvm use
```

If the version specified in .nvmrc is not installed, you can install it with:

```bash
nvm install
```

## Installing Project Dependencies

After setting the correct Node.js version, install the project dependencies:

```bash
npm install
```
