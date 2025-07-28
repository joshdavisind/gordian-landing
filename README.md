# 🪶 Gordian Development Web Landing

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2020.0.0-brightgreen)](https://nodejs.org/)
[![PNPM](https://img.shields.io/badge/pnpm-%3E%3D%208.0.0-orange)](https://pnpm.io/)

A modern, clean landing page for **Gordian Development** - a Software Development, Technology, and Leadership Consulting company. Built with **FeathersJS** backend and **React + ShadCN UI** frontend for a professional, airy design experience.

## 🎯 About Gordian Development

Gordian Development is a newly forming consulting company specializing in:
- **Software Development** - Custom solutions and technical expertise
- **Technology Consulting** - Strategic technology guidance and implementation
- **Leadership Development** - Executive coaching and organizational leadership

## ✨ Features

- 🎨 **Ultra Clean Design**: Light, airy aesthetic with strong visual hierarchy
- 🚀 **Modern Tech Stack**: FeathersJS API + React frontend with TypeScript
- 🎯 **Professional Landing**: Optimized for business presentation and lead generation
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 📱 **Responsive Design**: Perfect experience across all devices
- 🔧 **Developer Friendly**: Hot reload, TypeScript, and modern tooling

## 🛠️ Tech Stack

### Backend (API)
- **FeathersJS** - Real-time API framework for scalable backend services
- **Express** - Web framework for robust server-side functionality
- **Socket.io** - Real-time communication capabilities
- **Node.js 20** - Modern runtime environment

### Frontend (Web)
- **React 18** - Modern UI library with latest features
- **TypeScript** - Type safety and developer experience
- **Vite** - Lightning-fast build tool and dev server
- **ShadCN UI** - Beautiful, accessible component library
- **Tailwind CSS** - Utility-first CSS for rapid styling
- **Radix UI** - Headless UI primitives for accessibility

### Development
- **VS Code Dev Containers** - Consistent development environment
- **Docker** - Containerized development and deployment
- **PNPM** - Fast, efficient package management
- **ESLint + Prettier** - Code quality and formatting

## 🚀 Quick Start

### Prerequisites
- [VS Code](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/get-started)
- [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gordian-development-web-landing.git
   cd gordian-development-web-landing
   ```

2. **Open in VS Code**
   ```bash
   code .
   ```

3. **Reopen in Container**
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type "Dev Containers: Reopen in Container"
   - Wait for the container to build and setup to complete

4. **Start Development**
   ```bash
   # Start both API and web dev servers
   pnpm dev
   ```

5. **Access the Applications**
   - 🌐 **Landing Page**: http://localhost:5173
   - 🔌 **API**: http://localhost:3030
   - 🩺 **Health Check**: http://localhost:3030/api/health

## 📁 Project Structure

```
gordian-development-web-landing/
├── 📁 .devcontainer/           # Development container configuration
│   ├── 🐳 Dockerfile           # Container image definition
│   ├── ⚙️ devcontainer.json    # VS Code devcontainer settings
│   ├── 🐙 docker-compose.yml   # Multi-service orchestration
│   └── 🔧 setup.sh             # Container setup script
├── 📁 api/                     # FeathersJS Backend
│   ├── 📁 src/
│   │   └── 🚀 index.js         # API entry point
│   └── 📄 package.json         # Backend dependencies
├── 📁 web/                     # React Frontend
│   ├── 📁 src/
│   │   ├── 🎨 components/      # ShadCN UI components
│   │   ├── 📄 App.tsx          # Main application
│   │   └── 🎯 pages/           # Landing page sections
│   ├── 📄 package.json         # Frontend dependencies
│   └── ⚙️ vite.config.ts       # Vite configuration
├── 📄 package.json             # Workspace configuration
└── 📄 README.md                # This file
```

## 🎨 Design Philosophy

The landing page follows a clean, professional aesthetic inspired by modern admin dashboards:
- **Light & Airy**: Generous whitespace and clean typography
- **Strong Visual Hierarchy**: Clear information architecture
- **Professional Color Palette**: Subtle, business-appropriate colors
- **Modern Interactions**: Smooth animations and micro-interactions
- **Accessibility First**: WCAG compliant design patterns

## 🚀 Deployment

The application is containerized and ready for deployment to:
- **Vercel** - Frontend deployment
- **Railway** - Backend deployment
- **Docker** - Container orchestration
- **AWS/GCP/Azure** - Cloud infrastructure

## 📞 Contact

For questions about Gordian Development or this landing page:
- 📧 Email: [contact@gordiandev.com](mailto:contact@gordiandev.com)
- 🌐 Website: [gordiandev.com](https://gordiandev.com)

---

**Built with ❤️ for Gordian Development**