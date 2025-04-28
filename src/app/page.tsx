/**
 * Minimal home page example.
 * Safe to delete or extend for your own use case.
 * Not required for production use.
 */
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 32 }}>
      <h1>Welcome to the Next.js + MongoDB + Clerk Starter 🚀</h1>
      <p>This is a minimal, unstyled home page. You can delete or extend it as you wish.</p>
      <ul style={{ marginTop: 24 }}>
        <li><Link href="/dashboard">Go to Dashboard (auth required)</Link></li>
        <li><a href="/api/example-items" target="_blank" rel="noopener noreferrer">Example API: /api/example-items</a></li>
        <li><a href="/docs" target="_blank" rel="noopener noreferrer">Docs Folder</a></li>
        <li><a href="/memory-bank" target="_blank" rel="noopener noreferrer">Memory Bank</a></li>
        <li><a href="https://github.com/romiluz13/next_mongo_clerk" target="_blank" rel="noopener noreferrer">GitHub Repo</a></li>
      </ul>
    </main>
  );
}
