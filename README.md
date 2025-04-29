# 🚀 Next.js + MongoDB (Mongoose) + Clerk Starter

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-blue?logo=next.js)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green?logo=mongodb)](https://mongoosejs.com/)
[![Clerk Auth](https://img.shields.io/badge/Auth-Clerk-red?logo=clerk)](https://clerk.com/)

---

<p align="center">
  <img src="docs/screenshot-placeholder.png" alt="Project Screenshot" width="600"/>
</p>

---

## ✨ Why This Starter?
- **Zero config:** Auth & DB are ready—just add your `.env.local` and go.
- **Modern stack:** Next.js (App Router, TypeScript), MongoDB (Mongoose), Clerk authentication.
- **Extensible:** Add your own models, routes, and UI frameworks.
- **AI/Onboarding ready:** Docs and memory bank for AI assistants and fast team onboarding.
- **Open-source:** Clean, minimal, and community-driven.

---

## 🏁 First Steps (Checklist)
- [ ] Clone the repo
- [ ] Install dependencies
- [ ] fill in your credentials in .env.local`  
- [ ] Run `npm run dev` and visit [http://localhost:3000](http://localhost:3000)
- [ ] Start building your app!

---

## ⚡ Quick Start

```bash
git clone https://github.com/romiluz13/next_mongo_clerk.git
cd next_mongo_clerk
npm install
cp .env.example .env.local # then edit with your secrets
npm run dev
```

---

## 🛠️ Tech Stack
- [Next.js](https://nextjs.org/) (latest, App Router, TypeScript)
- [MongoDB](https://www.mongodb.com/) (with [Mongoose](https://mongoosejs.com/))
- [Clerk](https://clerk.com/) authentication
- [ESLint](https://eslint.org/) for code quality

---

## 📚 Documentation & AI Assistance
- [`docs/`](./docs/) — MongoDB, Clerk, and AI-assist guides
- [`memory-bank/`](./memory-bank/) — Project context, patterns, and architecture
- Example model: [`src/models/ExampleItem.ts`](./src/models/ExampleItem.ts)
- Example API: [`src/app/api/example-items/route.ts`](./src/app/api/example-items/route.ts)

---

## 🧩 Extending This Starter
- Add your own Mongoose models in `src/models/`
- Create new API routes in `src/app/api/`
- Customize the UI and add your favorite frameworks
- Update docs as your project evolves

---

## 🤝 Contributing
Contributions are welcome! Open issues, submit pull requests, or suggest improvements.

---

## 📄 License
[MIT](./LICENSE)

---

## 🧹 How to Remove Example Code
If you want a completely clean slate, just delete these files:
- `src/models/ExampleItem.ts`
- `src/app/api/example-items/route.ts`
- `src/app/dashboard/page.tsx`
- `src/app/page.tsx` (home page example)
- `src/app/ErrorBoundaryWrapper.tsx` (minimal error boundary, safe to delete)

That's it! Your project will be a blank Next.js + MongoDB + Clerk starter, ready for anything.

---

## Features
- Next.js 15 (App Router)
- MongoDB (Mongoose)
- Clerk (Auth)
- Tailwind CSS v4 (utility-first, fully configured)
- shadcn/ui (modern component library, minimal custom CSS)
- All configs (Tailwind, PostCSS) are set up for out-of-the-box use

## Quick Start
1. Clone the repo
2. Run `npm install`
3. Add your `.env.local` with MongoDB and Clerk keys
4. Run `npm run dev`

## Notes
- **Tailwind v4+**: The new PostCSS plugin (`@tailwindcss/postcss`) is already installed and configured. No extra setup needed for future users.
- **shadcn/ui**: Ready to use for beautiful, modern UI components. Add new components with `npx shadcn@latest add <component>`.
- Minimal, clean, and future-proof—just clone and build!

---

> Made with ❤️ By Rom Iluz for the open-source community. Happy hacking!
