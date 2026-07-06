# HomeHub Project State

## Current Milestone

Documentation foundation and architecture planning completed.

The next milestone is to begin implementation planning and set up the initial application scaffold.

---

## Repository Status

- GitHub repository created.
- Local repository cloned.
- Git configured.
- VS Code configured.
- Commit/push workflow confirmed working.
- Project state tracking file created.
- Core documentation completed.
- ADR documentation completed for initial architecture decisions.

---

## Current Branch

```text
main
```

---

## Completed Documents

The following documents have been completed:

- `README.md`
- `docs/Vision.md`
- `docs/PRD.md`
- `docs/Architecture.md`
- `docs/Development_Principles.md`
- `docs/Plugin_Specification.md`
- `docs/Database_Schema.md`
- `docs/API_Integrations.md`
- `docs/UI_Guidelines.md`
- `docs/Security.md`
- `docs/README.md`
- `docs/Future_Features.md`
- `docs/adr/ADR-001-local-first-architecture.md`
- `docs/adr/ADR-002-plugin-based-system.md`
- `docs/adr/ADR-003-accessibility-first-design.md`
- `docs/adr/ADR-004-local-database-choice.md`
- `docs/adr/ADR-005-api-integration-boundaries.md`

---

## Documents Still To Write

None for the initial documentation milestone.

Additional documents may be created later if needed.

Possible future documentation:

- `docs/Setup.md`
- `docs/Testing.md`
- `docs/Backup_Strategy.md`
- `docs/Contributing.md`
- `docs/Roadmap.md`
- Additional ADRs as new major decisions are made

---

## Known Decisions

### Product Direction

HomeHub is a local-first, plugin-based personal productivity dashboard.

It is intended to run first on Ubuntu, with possible future support for Windows and macOS.

HomeHub should function as a daily household operating dashboard rather than a generic productivity app.

---

### Core Priorities

HomeHub must be:

- Local-first
- Privacy-first
- Accessibility-first
- Plugin-first
- AI-friendly for future development
- Suitable for long-term maintainability
- Practical for real daily household use

---

### Project Standards

HomeHub should be treated as a professional software project.

Development expectations:

- Production-quality architecture
- Clear documentation
- Clean Git history
- One logical commit per completed document or feature
- Clear separation between core system and plugins
- Minimal unnecessary complexity
- No hidden cloud dependency for core functionality
- Plain-language documentation wherever possible
- Consistent file naming and structure

---

### Architecture Direction

HomeHub will use a local-first architecture.

Core app data should be stored locally by default.

External services may be used only as optional integrations.

The app should remain useful offline.

Relevant ADR:

```text
docs/adr/ADR-001-local-first-architecture.md
```

---

### Plugin Direction

HomeHub will use a plugin-based architecture.

The core application should provide shared infrastructure.

Feature-specific functionality should live in plugins whenever practical.

Relevant ADR:

```text
docs/adr/ADR-002-plugin-based-system.md
```

---

### Accessibility Direction

Accessibility is a core requirement from the beginning.

HomeHub should support:

- Keyboard navigation
- Screen-reader compatibility
- Low cognitive load
- Dyslexia-friendly readability
- ADHD-friendly task initiation
- Clear focus states
- No information conveyed by colour alone
- Future support for larger text and reduced motion

Relevant ADR:

```text
docs/adr/ADR-003-accessibility-first-design.md
```

---

### Database Direction

HomeHub will use a local database.

SQLite is the preferred candidate, but the decision remains proposed until the application framework is selected.

Relevant ADR:

```text
docs/adr/ADR-004-local-database-choice.md
```

---

### API Integration Direction

External API integrations must be isolated from core application logic.

Provider-specific API logic should live in dedicated adapters or plugins.

External data should be normalized before storage or display.

Relevant ADR:

```text
docs/adr/ADR-005-api-integration-boundaries.md
```

---

### UI Direction

The UI should be:

- Dashboard-first
- Calm
- Clear
- Practical
- Modular
- Card-based
- Low clutter
- Plugin-consistent

The main dashboard should prioritize:

- Today’s appointments
- Upcoming events
- Time-sensitive tasks
- Important reminders
- Weather
- Transit when available
- Notes attached to events or recurring appointments

---

### Privacy Direction

HomeHub should avoid unnecessary cloud dependency.

Core household data should remain local unless the user explicitly enables an external integration.

External integrations should be optional and documented.

Sensitive data includes:

- Calendar details
- Event notes
- Recurring appointment notes
- Saved locations
- API credentials
- Personal household notes

---

### Security Direction

HomeHub should:

- Store credentials separately from ordinary app data.
- Prefer operating-system credential storage.
- Avoid committing local databases or secrets to Git.
- Avoid logging sensitive information.
- Keep external integrations explicit.
- Treat plugins as permission-bound modules.
- Avoid exposing a local web server to the network by default.

---

## Current Workflow

1. Work on one complete document, feature, or setup step at a time.
2. Add it to the correct file in VS Code.
3. Review for formatting and consistency.
4. Commit the completed unit of work.
5. Push to GitHub.
6. Update this `PROJECT_STATE.md` file when stopping work, taking a longer break, finishing a milestone, changing direction, or when the repo state becomes confusing.
7. Continue immediately to the next task.

---

## Next Task

Begin implementation planning.

Recommended next step:

```text
Decide the initial application stack and prototype architecture.
```

The immediate decision is whether HomeHub should begin as:

```text
Option A: Local web app
Frontend: React or similar
Backend: Python FastAPI or Node/Express
Database: SQLite
Runs locally in browser
```

```text
Option B: Desktop app wrapper
Frontend: Web UI
Backend/local services
Desktop wrapper: Tauri or Electron
Database: SQLite
```

```text
Option C: Python-first desktop app
Frontend: Native or web-based Python UI
Backend: Python
Database: SQLite
```

A stack decision should be documented before implementation begins.

Likely next ADR:

```text
docs/adr/ADR-006-initial-application-stack.md
```

---

## Recommended Next Milestone

### Milestone 2: Initial Application Scaffold

Goal:

Create the first runnable HomeHub prototype.

Possible tasks:

1. Choose initial stack.
2. Create ADR-006 for stack decision.
3. Create setup instructions.
4. Initialize frontend/backend project structure.
5. Add basic local development commands.
6. Create a basic dashboard shell.
7. Add placeholder cards:
   - Today
   - Calendar
   - Tasks
   - Notes
   - Weather
   - Transit
8. Add initial accessibility-friendly layout.
9. Add first basic local storage proof of concept.
10. Confirm app runs locally.

---

## Open Questions

These are the main unresolved project questions:

- Which frontend framework will be used?
- Which backend framework will be used?
- Will the first prototype be a browser-based local web app, native desktop app, or hybrid?
- Will SQLite be confirmed as the local database?
- How will plugins be loaded at runtime?
- How will calendar, weather, transit, and notes integrations be prioritized?
- What authentication, if any, is needed for a local-first single-user app?
- How will credentials and API tokens be stored securely on Ubuntu?
- How much plugin sandboxing is required for version 1?
- Should HomeHub support encrypted local backups?
- Should HomeHub support multi-user household profiles later?
- Should the first implementation focus on dashboard UI before real integrations?
- Should weather/transit start with mock data before live APIs?
- Should the app use Tauri, Electron, or no desktop wrapper at first?

---

## Last Completed Milestone

Initial documentation foundation.

Completed:

- Core project documentation
- Documentation index
- Security documentation
- Future features document
- Initial architecture decision records

---

## Last Completed Commit

Unknown.

Update this after checking the latest successful commit with:

```bash
git log --oneline -5
```

---

## Resume Instructions

When resuming this project in a new chat, provide this file first or say:

```text
We are building HomeHub. Read PROJECT_STATE.md and continue from the Next Task.
```

The next assistant should not restart planning from scratch.

The next assistant should continue from:

```text
Milestone 2: Initial Application Scaffold
```