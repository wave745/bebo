# BEBO Token - Cryptocurrency Landing Page

## Overview

BEBO is a cryptocurrency token landing page built as a modern web application showcasing a bear-themed meme token. The project features an interactive character gallery, tokenomics visualization, roadmap presentation, and community engagement sections. Built with React and TypeScript, it presents a professional cryptocurrency marketing site with smooth animations and responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom design system featuring BEBO brand colors (green, yellow, dark theme)
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **Animation**: Framer Motion for smooth animations, character interactions, and page transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching

### Design System
- **Theme**: Dark-first design with custom CSS variables for consistent theming
- **Typography**: Inter for body text, JetBrains Mono for code/technical content
- **Color Palette**: Custom BEBO brand colors with HSL-based color system
- **Component Library**: Complete shadcn/ui integration with custom theme overrides

### Backend Architecture
- **Server Framework**: Express.js with TypeScript for API endpoints
- **Database Layer**: Drizzle ORM configured for PostgreSQL with Neon Database serverless driver
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Storage Interface**: Abstracted storage layer with in-memory fallback and database implementations

### Data Models
- **Users**: Username/password authentication system
- **Token Metrics**: Price, market cap, holder count, supply data
- **Community Stats**: Social media follower counts across platforms

### Build & Development
- **Bundler**: Vite for fast development and optimized production builds
- **Development**: Hot module replacement with Vite dev server integration
- **Production**: ESBuild for server bundling, static asset serving
- **TypeScript**: Strict configuration with path aliases for clean imports

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Drizzle ORM**: Type-safe database interactions with migration support

### UI & Animation
- **Radix UI**: Unstyled, accessible component primitives
- **Framer Motion**: Animation library for character interactions and page transitions
- **Tailwind CSS**: Utility-first CSS framework with custom configuration

### Development Tools
- **Replit Integration**: Custom Vite plugins for development banner and cartographer
- **Runtime Error Overlay**: Development error handling and debugging

### Forms & Validation
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation integrated with Drizzle for type safety

The application follows a modern full-stack architecture with clean separation between client and server concerns, leveraging TypeScript throughout for type safety and developer experience.