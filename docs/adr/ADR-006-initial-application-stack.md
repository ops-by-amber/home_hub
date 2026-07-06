# ADR-006: Initial Application Stack

## Status

Accepted

---

## Context

HomeHub is moving from documentation planning into implementation.

The project needs an initial application stack that supports:

- Local-first operation
- Ubuntu development
- A dashboard-first interface
- Accessibility-first UI
- Plugin-based architecture
- SQLite local storage
- Future desktop packaging
- Maintainable solo development
- AI-assisted development

The stack should allow HomeHub to become a working prototype quickly without adding unnecessary complexity too early.

---

## Decision

HomeHub will begin as a local web application.

The initial stack will be:

```text
Frontend: React + Vite + TypeScript
Backend: Python + FastAPI
Database: SQLite
Desktop wrapper: Deferred
Target OS: Ubuntu first
```

The application will initially run locally in the browser during development.

A desktop wrapper such as Tauri or Electron may be considered later after the core dashboard, local storage, and plugin boundaries are working.

---

## Rationale

## Cost Constraint

The initial HomeHub stack must be buildable using free tools.

The selected stack uses open-source or free-to-use development tools:

- React
- Vite
- TypeScript
- Python
- FastAPI
- SQLite
- Git
- GitHub
- VS Code
- Ubuntu

No paid hosting, paid database, paid API, paid desktop packaging service, or paid cloud infrastructure is required for the initial prototype.

### React

React is a practical choice for the first HomeHub interface because it supports:

- Component-based UI
- Dashboard cards
- Reusable layout patterns
- Large ecosystem
- Good TypeScript support
- Accessibility-friendly web development when used correctly
- Future desktop packaging through Tauri or Electron

React also makes it easier to build a modular dashboard with shared components used across plugins.

---

### Vite

Vite is selected for frontend tooling because it is:

- Fast
- Commonly used with React
- Simple to configure
- Suitable for local development
- Easier to work with than heavier build setups

---

### TypeScript

TypeScript is selected for the frontend because it improves:

- Code clarity
- Component contracts
- Plugin interface safety
- Refactoring confidence
- AI-assisted development quality

---

### Python

Python is selected for the backend because it is:

- Practical for local tools
- Easy to read
- Strong for automation
- Strong for API integration
- Well supported on Ubuntu
- Suitable for SQLite-backed local services
- Good for future AI or scripting features

---

### FastAPI

FastAPI is selected for the backend because it provides:

- Clean API structure
- Automatic OpenAPI documentation
- Type-friendly backend development
- Simple local server setup
- Good separation between frontend and backend
- Strong fit for Python-based local services

---

### SQLite

SQLite remains the preferred local database.

It supports:

- Local-first data storage
- Simple deployment
- Structured data
- Backups
- Migrations
- Desktop application use

SQLite was previously identified as the preferred candidate in:

```text
docs/adr/ADR-004-local-database-choice.md
```

This ADR confirms SQLite for the initial implementation.

---

## Desktop Wrapper Deferred

HomeHub will not start with Tauri or Electron.

A desktop wrapper is deferred because the first milestone should prove:

- Dashboard layout
- Backend API
- Local storage
- Basic plugin structure
- Development workflow
- Accessibility-friendly UI

Adding a desktop wrapper too early would increase complexity before the core app exists.

---

## Alternatives Considered

### Tauri First

Advantages:

- Smaller desktop app bundle than Electron
- Strong fit for local desktop applications
- Good future option for HomeHub

Disadvantages:

- Adds Rust/tooling complexity
- Adds desktop packaging concerns too early
- Slows first prototype
- Not needed to validate the dashboard concept

Decision:

Deferred.

---

### Electron First

Advantages:

- Mature desktop app ecosystem
- Strong web UI support
- Easier than Tauri in some JavaScript-heavy projects

Disadvantages:

- Heavier resource usage
- Adds packaging complexity
- Not needed for the first prototype
- Less aligned with keeping the early project lightweight

Decision:

Deferred.

---

### Python-Only Desktop App

Advantages:

- Single-language application
- Simpler backend/frontend split
- Good local control

Disadvantages:

- Harder to create a polished dashboard UI
- More limited component ecosystem
- Accessibility depends heavily on chosen GUI toolkit
- Less natural fit for future plugin dashboard cards

Decision:

Rejected for initial implementation.

---

### Node Backend

Advantages:

- Same language as frontend
- Good web development ecosystem
- Strong tooling

Disadvantages:

- Python is better aligned with HomeHub’s future automation, local scripting, and possible AI-support features
- FastAPI provides clearer backend structure for this project
- Python + SQLite is a strong fit for local-first tooling

Decision:

Rejected for initial backend.

---

## Consequences

### Positive Consequences

- Fast path to a runnable prototype
- Clear frontend/backend separation
- Good accessibility potential
- Good SQLite support
- Good plugin architecture foundation
- Easy local development on Ubuntu
- Future desktop wrapper remains possible
- Strong fit for AI-assisted coding

---

### Negative Consequences

- Requires managing both frontend and backend
- Requires local server process during development
- Desktop packaging remains unresolved
- Plugin runtime model still needs implementation detail
- Need to coordinate TypeScript frontend models with Python backend models

---

## Implementation Implications

The repository should be scaffolded with:

```text
frontend/
backend/
plugins/
docs/
tests/
scripts/
assets/
.github/
```

The frontend should contain the React/Vite/TypeScript app.

The backend should contain the FastAPI app.

The first runnable prototype should include:

- Backend health endpoint
- Frontend dashboard shell
- Placeholder dashboard cards
- Local development commands
- Basic README setup instructions
- SQLite proof-of-concept later in the scaffold milestone

---

## Initial Development Commands

Expected early commands may include:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install fastapi uvicorn
uvicorn app.main:app --reload
```

```bash
cd frontend
npm create vite@latest . -- --template react-ts
npm install
npm run dev
```

Exact commands may change during implementation.

---

## Related Documents

- `docs/Architecture.md`
- `docs/Development_Principles.md`
- `docs/Database_Schema.md`
- `docs/Plugin_Specification.md`
- `docs/UI_Guidelines.md`
- `docs/Security.md`
- `docs/adr/ADR-004-local-database-choice.md`

---

## Decision Summary

HomeHub will begin as a local web application using React, Vite, TypeScript, Python, FastAPI, and SQLite.

Desktop packaging is deferred until the core local dashboard and backend architecture are working.