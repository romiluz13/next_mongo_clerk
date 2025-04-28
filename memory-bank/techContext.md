# Tech Context

> Describes the tech stack, setup, and constraints for open-source and AI onboarding.

## Technologies Used
- Next.js (latest, App Router, TypeScript)
- MongoDB (via Mongoose)
- Clerk (Next.js SDK, Node SDK)
- ESLint

## Development Setup
- Node.js (LTS recommended)
- .env file for configuration
- `npm run dev` for local development

## Technical Constraints
- Only Mongoose for MongoDB (no native driver)
- Only Clerk for authentication
- No UI frameworks included by default (add your own as needed)

## Dependencies
- next
- react
- react-dom
- mongoose
- @clerk/nextjs
- @clerk/clerk-sdk-node

## Extensibility
- Add your own dependencies, models, and UI frameworks as needed 