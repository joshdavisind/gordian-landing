# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a full-stack development environment using Docker containers with two main components:
- `api/` - FeathersJS backend API
- `web/` - Frontend web application (likely using ShadCN UI components)

## Development Environment

This project uses a VS Code Dev Container setup:
- **Container Runtime**: Docker Compose with Node.js 20
- **Package Manager**: PNPM (specified in devcontainer config)
- **Workspace Location**: `/workspace` inside container

### Initial Setup
Run the setup script to install dependencies and create environment files:
```bash
./.devcontainer/setup.sh
```

This script:
- Installs dependencies with `pnpm install --frozen-lockfile`
- Installs FeathersJS CLI globally if missing
- Creates `.env` files from examples in both `api/` and `web/` directories

## Technology Stack

Based on the VS Code extensions and setup:
- **Backend**: FeathersJS (real-time API framework)
- **Frontend**: Likely React with ShadCN UI components
- **Styling**: Tailwind CSS
- **Database**: Prisma ORM
- **Linting**: ESLint with Prettier formatting
- **TypeScript**: Configured with workspace-aware settings

## Development Commands

Since this uses PNPM workspaces, commands should be run from the root or specific workspace directories:

### Package Management
- `pnpm install` - Install all dependencies
- `pnpm install --frozen-lockfile` - Install from lockfile (CI/production)

### FeathersJS Backend (api/)
- `pnpm dlx feathers --version` - Check Feathers CLI version
- Commands likely include standard Feathers patterns for services, hooks, and authentication

### Frontend (web/)
- Standard frontend development commands (build, dev, test) - specific commands depend on the framework used

## Development Ports
- **API**: 3030 (FeathersJS backend)
- **Web**: 5173 (likely Vite dev server)

## Environment Configuration
- Environment files are created from `.env.example` templates in both `api/` and `web/`
- `NODE_ENV=development` is set in the container environment

## Code Style
- **Formatting**: Prettier on save enabled
- **Linting**: ESLint with PNPM package manager
- **Tab Size**: 2 spaces
- **TypeScript**: Workspace-aware with local TypeScript SDK