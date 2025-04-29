# System Patterns

> Documents architecture, design patterns, and key decisions for open-source and AI onboarding.

## Architecture
- Next.js (App Router, TypeScript, src/ directory)
- MongoDB via Mongoose (singleton connection pattern)
- Clerk for authentication (Next.js middleware and API integration)

## Key Technical Decisions
- Uses Mongoose for MongoDB to ensure schema and model consistency
- Clerk is the only authentication provider for simplicity and security
- Environment variables for all secrets and connection strings
- AI-assist docs folder for onboarding and automation

## Design Patterns
- Singleton pattern for MongoDB connection
- Middleware for authentication and API protection
- Modular folder structure for scalability

## Component Relationships
- API routes use Mongoose models
- Clerk middleware protects routes and provides user context
- Docs folder provides AI and onboarding context

## Extensibility
- This template is designed to be extended for any Next.js + MongoDB + Clerk project
- Add your own models, routes, and UI as needed

## UI Design Pattern
- Use shadcn/ui components and Tailwind CSS utility classes for all new UI.
- Build UI as isolated, reusable components in `src/components/ui`.
- Minimal custom CSS—prefer Tailwind utilities and shadcn design tokens.
- Theme consistency: use shadcn color tokens and variables for light/dark mode and brand.
- Minimal change principle: only refactor existing UI to shadcn when already modifying that part.
- Gradual, thoughtful adoption for a clean, future-proof codebase. 