# Bravo IQ

## 🚀 Project Overview

Welcome to **Bravo IQ** — an end-to-end MERN-based interview practice platform with live sessions, code execution, and collaborative sharing.

Built by: **Aarav Kumar**

Stack:
- Frontend: React (+ Vite)
- Backend: Node.js + Express
- Database: MongoDB Atlas
- Realtime streaming: Stream/Inngest
- Auth: Clerk

---

## 📌 Features

### 1. Authentication / User
- Sign up / login flow through **Clerk**
- Protected routes via `backend/middleware/protectRoute.js`
- User model in `backend/src/models/User.js`
- Session tracking and user association

### 2. Sessions (Interviews / Pair Coding)
- CRUD operations for sessions: create, read, update, delete
- API routes in `backend/src/routes/sessionRoute.js`
- Logic in `backend/src/controllers/sessionController.js`
- Frontend: `ActiveSessions.jsx`, `RecentSessions.jsx`, `SessionPage.jsx`

### 3. Real-time communication / streaming
- Realtime chat/session streaming in `backend/src/lib/stream.js`
- Chat routes: `backend/src/routes/chatRoutes.js`
- Controller: `backend/src/controllers/chatController.js`
- Frontend: `VideoCallUI.jsx`, `hooks/useStreamClient.js`

### 4. Code Execution
- Integrated code runner (Piston API helper: `frontend/src/lib/piston.js`)
- Editor + run output UI: `CodeEditorPanel.jsx`, `OutputPanel.jsx`

### 5. Problems library
- Problem data in `frontend/src/data/problems.js`
- Pages: `ProblemsPage.jsx`, `ProblemPage.jsx`, `ProblemDescription.jsx`

### 6. Dashboard + Stats
- Dashboard & statistics cards: `StatsCards.jsx`

### 7. UX + navigation
- Navbar: `Navbar.jsx`
- Landing/welcome: `WelcomeSection.jsx`
- Create session modal: `CreateSessionModal.jsx`

---

## 🏗️ Architecture

### Backend architecture
- Express server in `backend/src/server.js` connects routes and middleware
- Auth middleware in `backend/middleware/protectRoute.js` ensures protected endpoints
- Controllers in `backend/src/controllers/` handle request logic (`sessionController.js`, `chatController.js`)
- Routes in `backend/src/routes/` (`sessionRoute.js`, `chatRoutes.js`)
- Models in `backend/src/models/` (`User.js`, `Session.js`) use Mongoose schemas
- Database connection via `backend/src/lib/db.js` to MongoDB Atlas using `DB_URL`
- Third-party service integration via `backend/src/lib/stream.js`, `backend/src/lib/inngest.js`

### Frontend architecture
- Vite + React app entrypoint in `frontend/src/main.jsx`
- Global styles in `frontend/src/index.css`
- Feature pages in `frontend/src/pages/` (`HomePage.jsx`, `DashboardPage.jsx`, `ProblemPage.jsx`, `ProblemsPage.jsx`, `SessionPage.jsx`)
- UI components in `frontend/src/components/` (e.g., `CodeEditorPanel.jsx`, `VideoCallUI.jsx`)
- API requests in `frontend/src/api/sessions.js` and client helpers in `frontend/src/lib/axios.js`/`frontend/src/lib/utils.js`
- Custom hooks in `frontend/src/hooks/` for sessions and streaming (`useSessions.js`, `useStreamClient.js`)
- Problem definitions in `frontend/src/data/problems.js`

---

## 🛠️ Setup

### Install dependencies
- Root: `npm install`
- Backend: `cd backend && npm install`
- Frontend: `cd frontend && npm install`

### Run locally
- Backend: `cd backend && npm run dev`
- Frontend: `cd frontend && npm run dev`

---

## 🔐 Environment variables

### `backend/.env`
- `PORT`: 3000
- `DB_URL`: MongoDB Atlas connection string
- `NODE_ENV`: production/development
- `INNGEST_EVENT_KEY`
- `INNGEST_SIGNING_KEY`
- `STREAM_API_KEY`
- `STREAM_API_SECRET`
- `CLERK_PUBLISHABLE_KEY` (e.g. `pk_test_...`)
- `CLERK_SECRET_KEY` (e.g. `sk_test_...`)
- `CLIENT_URL` (e.g. `https://localhost:5173`)

> Keep all `.env` values secret; do not commit them to source control.

---

## 🧩 What each secret enables

- `DB_URL`: persistence for users, sessions, history, and analytics.
- `CLERK_*`: authentication, user session validation, route protection.
- `STREAM_*`: real-time media/chat session capabilities.
- `INNGEST_*`: event orchestration and background workflows.
- `CLIENT_URL`: CORS origin for frontend and backend API calls.

---

## ⚠️ Known limits + improvements

- Current keys are test-style (`pk_test_...`, `sk_test_...`) and need production replacements.
- No horizontal scaling or clustering; single server deployment only.
- No API rate limiting; add limits for abuse protection.
- Add stronger input validation and sanitization.
- Add unit and integration tests (backend/routes + frontend components).
- Add monitoring/logging (Sentry, Grafana, etc.) and error reporting.
- Add Docker + CI/CD pipelines for repeatable deploy.
- Add TypeScript for full run-time type safety.
- Improve mobile-responsive design and accessibility.

---

## 📌 Recommendations for a production-ready website

- Guard all endpoints with authentication as needed.
- Add proper session expiration and refresh handling.
- Add uploads, avatars, or shared whiteboard for pair-programming.
- Add billing support if you plan premium features.
- Add separate staging + production environments.
- Add performance monitoring and security scanning.

---

## 🏷️ Tag mark
`#AaravKumar`  `#BravoIQ`  `#builtbyAaravKumar`
