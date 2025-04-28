# System Patterns

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