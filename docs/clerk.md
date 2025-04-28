# Clerk Authentication Integration Guide

This project uses **Clerk** for authentication, providing a secure, modern, and extensible auth solution for Next.js (App Router).

## Setup
- Clerk packages are installed: `@clerk/nextjs` and `@clerk/clerk-sdk-node`.
- Required environment variables:
  - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
  - `CLERK_SECRET_KEY`
- Add these to your `.env.local` file (see `.env.example`).

## Middleware
- Clerk is integrated via `src/middleware.ts` using `clerkMiddleware` and `createRouteMatcher`.
- All routes are protected by default except those listed as public (e.g., `/`, `/api/public`).
- To add more public routes, update the `isPublicRoute` matcher array.

## UI Integration
- The root layout (`src/app/layout.tsx`) wraps the app in `<ClerkProvider>`.
- Includes `<SignInButton />`, `<SignUpButton />`, `<UserButton />`, `<SignedIn />`, and `<SignedOut />` for user actions.
- You can customize the header or move these components as needed.

## Usage in API Routes
- Use the `auth()` helper from `@clerk/nextjs/server` to get the current user/session in API routes or server actions.
- Example:
```ts
import { auth } from '@clerk/nextjs/server';

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    // Handle unauthenticated
  }
  // Proceed with authenticated logic
}
```

## Advanced
- Clerk supports organizations, roles, and permissions. See Clerk docs for advanced RBAC.
- You can use `auth().has()` and `auth().protect()` for fine-grained access control.
- Clerk middleware can be combined with other Next.js middleware (see Clerk docs for examples).

---
**AI Context7/MCP Note:**
- This file is structured for easy AI parsing and onboarding automation.
- For more, see the [memory-bank](../memory-bank/) and [docs/README.md](./README.md).
- Reference: [Clerk Middleware Docs](https://clerk.com/docs/references/nextjs/clerk-middleware) 