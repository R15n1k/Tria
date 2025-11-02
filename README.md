# Tria Contacts — Frontend Assignment

This is a small React + TypeScript single-page app implementing a simple contact list for the Tria frontend assignment.

Features
- View a list of contacts
- Search contacts by name (live filter)
- Add a new contact (persisted to localStorage)

How to run locally
1. Install dependencies

```powershell
npm install
```

2. Run dev server

```powershell
npm run dev
```

Open the URL printed by Vite.

Deployment
- Recommended: deploy the `tria-contacts` folder to Vercel or Netlify (it is a Vite app).

Notes and assumptions
- Data is mocked in `src/data/contacts.ts` and stored in `localStorage` after adding.
- I used Vite + React + TypeScript for a simple fast dev experience.
- The Add Contact form is intentionally minimal.

Libraries used
- React — UI library
- Vite — dev/build tooling
