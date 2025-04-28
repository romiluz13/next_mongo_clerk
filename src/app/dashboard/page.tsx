/**
 * Example dashboard page (auth-protected).
 * Safe to delete or extend for your own use case.
 * Not required for production use.
 */
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>Dashboard (Example)</h1>
      <SignedIn>
        <p>Welcome! You are signed in.</p>
        <UserButton />
        <p style={{ marginTop: 24 }}>
          <Link href="/">Go to Home</Link>
        </p>
        {/* Example: You could fetch and display ExampleItems here */}
      </SignedIn>
      <SignedOut>
        <p>You must be signed in to view this page.</p>
        <Link href="/">Go to Home</Link>
      </SignedOut>
    </main>
  );
} 