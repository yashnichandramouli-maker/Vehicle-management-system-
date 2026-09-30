# IntelliRent — Customer Frontend

## Overview
React 18 + Vite 6 single-page app for a vehicle rental system ("IntelliRent").
It is the **customer-facing** frontend; it expects a Java backend API (not included in this repo) at the URL in `VITE_JAVA_BACKEND_BASE_URL`.

## Running in Base44
- `docker compose -f docker-compose.base44.yml up -d` starts the Vite dev server on host port 3000.
- The container runs `npm install` then `npx vite --host 0.0.0.0 --port 5173`.
- No lockfile is committed; npm resolves from `package.json` each boot.
- Live reload is active (Vite HMR); edits appear without a rebuild.

## Backend dependency
- API base URL is configured via `VITE_JAVA_BACKEND_BASE_URL` (defaults to `http://localhost:8080`).
- **No backend exists in this repo.** The UI renders, but any API call (login, search, bookings) will fail until a compatible Java backend is running at that URL.
- Auth uses a JWT token stored in `localStorage` (`token` key) and customer info (`customer` key).

## Key files
- `src/services/api.js` — all API endpoints and axios instance.
- `src/context/AuthContext.jsx` — auth state (token/customer in localStorage).
- `src/App.jsx` — routes; protected routes redirect to `/login`.
- `vite.config.js` — dev server config (binds 0.0.0.0, allows all hosts).
