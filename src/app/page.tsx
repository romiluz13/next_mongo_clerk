/**
 * Minimal, beautiful landing page for the Next.js + MongoDB + Clerk Starter.
 * Safe to delete or replace for your own app.
 *
 * Credits: Rom Iluz
 */
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

function MongoStatus() {
  // Simulate a connected status for demo (replace with real check if needed)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#22c55e', fontWeight: 600 }}>
      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="10" r="10" /></svg>
      MongoDB Connected
    </div>
  );
}

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0f172a 0%, #18181b 100%)', color: 'white', padding: 32 }}>
      <div style={{ maxWidth: 480, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32, padding: '64px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <h1 style={{ fontSize: 40, fontWeight: 800, background: 'linear-gradient(90deg, #60a5fa, #34d399, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', textShadow: '0 2px 16px #0008' }}>
            Next.js + MongoDB + Clerk Starter
          </h1>
          <p style={{ fontSize: 18, color: '#cbd5e1', textAlign: 'center', marginTop: 8 }}>
            The ultimate launchpad for any modern web app.<br />
            <span style={{ fontWeight: 600 }}>Zero config. Extensible. AI-ready.</span>
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginTop: 8 }}>
          <span style={badgeStyle}>🚀 Next.js 15</span>
          <span style={badgeStyle}>🍃 MongoDB (Mongoose)</span>
          <span style={badgeStyle}>🔐 Clerk Auth</span>
          <span style={badgeStyle}>🧪 Vitest</span>
          <span style={badgeStyle}>🎨 Prettier</span>
          <span style={badgeStyle}>🤖 AI/Memory Bank</span>
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginTop: 24 }}>
          <MongoStatus />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginTop: 8 }}>
            <a href="https://github.com/romiluz13/next_mongo_clerk" target="_blank" rel="noopener noreferrer" style={buttonStyleBlack}>GitHub Repo</a>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 32 }}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="38" fill="#1e293b" stroke="#6366f1" strokeWidth="4" /><ellipse cx="40" cy="55" rx="18" ry="6" fill="#6366f1" opacity="0.2" /><circle cx="40" cy="32" r="16" fill="#6366f1" opacity="0.7" /><circle cx="40" cy="32" r="8" fill="#a5b4fc" opacity="0.8" /></svg>
          <span style={{ fontSize: 12, color: '#94a3b8', marginTop: 8 }}>Made with <span style={{ color: '#f472b6' }}>❤️</span> by <span style={{ fontWeight: 700 }}>Rom Iluz</span></span>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <SignedOut>
            <SignInButton>
              <button style={loginButtonStyle}>Log In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </main>
  );
}

const badgeStyle = {
  padding: '6px 14px',
  borderRadius: 999,
  background: 'rgba(30,41,59,0.8)',
  border: '1px solid #334155',
  fontSize: 14,
  display: 'flex',
  alignItems: 'center',
  gap: 4,
};

const buttonStyleBlack = { 
  padding: '12px 28px',
  borderRadius: 12,
  background: 'rgba(0,0,0,0.7)',
  color: 'white',
  fontWeight: 600,
  boxShadow: '0 2px 8px #0004',
  textDecoration: 'none',
  border: '1px solid #334155',
  transition: 'background 0.2s',
};

const loginButtonStyle = {
  padding: '16px 48px',
  borderRadius: 16,
  background: 'linear-gradient(90deg, #6366f1 0%, #34d399 100%)',
  color: 'white',
  fontWeight: 800,
  fontSize: 20,
  boxShadow: '0 4px 32px #6366f155',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  transition: 'transform 0.1s, box-shadow 0.1s',
  margin: '0 auto',
  letterSpacing: 1,
  textShadow: '0 2px 8px #0006',
};
