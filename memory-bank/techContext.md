# Tech Context

> Describes the tech stack, setup, and constraints for open-source and AI onboarding.

## Technologies Used
- Next.js 15 (App Router)
- MongoDB (Mongoose)
- Clerk (Auth)
- Tailwind CSS (utility-first, v4)
- shadcn/ui (component library, minimal custom CSS)
- ESLint

## Development Setup
- Node.js (LTS recommended)
- .env file for configuration
- `npm run dev` for local development

## Technical Constraints
- No global CSS overrides unless absolutely necessary.
- All new UI should be compatible with Tailwind and shadcn.
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