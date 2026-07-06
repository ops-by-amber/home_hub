Create this file:

```text
docs/README.md
```

Paste this full document:

````markdown
# HomeHub Documentation

## Purpose

This folder contains the planning, architecture, design, and decision documentation for HomeHub.

HomeHub is a local-first, plugin-based personal productivity dashboard. The documentation in this folder should make the project understandable to future contributors, AI assistants, and the original developer after time away from the project.

The goal is not to create paperwork for its own sake. The goal is to preserve important decisions, reduce confusion, and make development easier.

---

## Documentation Principles

HomeHub documentation should be:

- Clear
- Practical
- Plain-language where possible
- Easy to update
- Useful during development
- Specific enough to guide implementation
- Flexible enough to evolve as the project changes

Documentation should explain both:

- What HomeHub is supposed to do
- Why important technical and product decisions were made

---

## Folder Structure

Recommended documentation structure:

```text
docs/
├── README.md
├── Vision.md
├── PRD.md
├── Architecture.md
├── Development_Principles.md
├── Plugin_Specification.md
├── Database_Schema.md
├── API_Integrations.md
├── UI_Guidelines.md
├── Security.md
├── Future_Features.md
└── adr/
    ├── ADR-001-local-first-architecture.md
    ├── ADR-002-plugin-based-system.md
    ├── ADR-003-accessibility-first-design.md
    ├── ADR-004-local-database-choice.md
    └── ADR-005-api-integration-boundaries.md
````

---

## Core Documents

### `Vision.md`

Defines the long-term purpose and direction of HomeHub.

Update this when:

* The project purpose changes
* The intended user experience changes
* The product direction expands significantly
* A major goal is added or removed

Do not update this for small implementation details.

---

### `PRD.md`

The Product Requirements Document defines what HomeHub should do.

It should describe:

* Core user needs
* Main features
* Functional requirements
* Non-functional requirements
* Early version scope
* Out-of-scope items

Update this when:

* New core requirements are added
* Version 1 scope changes
* A major feature is removed
* User needs become clearer

---

### `Architecture.md`

Defines the technical structure of HomeHub.

It should explain:

* Main system components
* Frontend/backend relationship
* Plugin architecture
* Local storage approach
* Integration boundaries
* Data flow
* Runtime assumptions

Update this when:

* The technical stack changes
* Major components are added or removed
* Plugin loading changes
* Local database strategy changes
* The app changes from web, desktop, or hybrid architecture

---

### `Development_Principles.md`

Defines how HomeHub should be developed.

It should describe:

* Code quality standards
* Git workflow
* Commit expectations
* Documentation expectations
* Simplicity principles
* AI-assisted development rules
* Maintainability expectations

Update this when:

* Workflow changes
* Commit practices change
* Testing expectations change
* AI usage expectations change
* Project standards become clearer

---

### `Plugin_Specification.md`

Defines how HomeHub plugins should work.

It should describe:

* Plugin structure
* Plugin metadata
* Plugin permissions
* Plugin lifecycle
* Plugin UI requirements
* Plugin data ownership
* Plugin integration boundaries

Update this when:

* Plugin architecture changes
* Plugin permissions change
* Plugin metadata changes
* Plugin loading changes
* Plugin API expectations change

---

### `Database_Schema.md`

Defines the expected local data model.

It should describe:

* Core entities
* Tables or collections
* Relationships
* Plugin-owned data
* Migration expectations
* Local storage assumptions

Update this when:

* Database tables change
* Entity relationships change
* Plugin storage rules change
* Migration strategy changes
* A final database technology is selected

---

### `API_Integrations.md`

Defines expected external integrations.

It should describe:

* Calendar integration
* Weather integration
* Transit integration
* Notes-related integrations
* Authentication expectations
* API boundaries
* Offline behaviour
* External data handling

Update this when:

* A new external service is added
* API requirements change
* Authentication flow changes
* Data sync behaviour changes
* Offline handling changes

---

### `UI_Guidelines.md`

Defines interface and interaction standards.

It should describe:

* Dashboard layout
* Accessibility requirements
* Card system
* Navigation
* Visual style
* Interaction standards
* Plugin UI consistency
* Responsive behaviour

Update this when:

* UI direction changes
* A component system is chosen
* Accessibility requirements change
* Dashboard layout changes
* Plugin UI rules change

---

### `Security.md`

Defines privacy, security, and data-safety expectations.

It should describe:

* Local-first data handling
* Credential storage
* External integration boundaries
* Plugin permissions
* Logging restrictions
* Backup risks
* Offline behaviour
* Development security practices

Update this when:

* Credential storage approach changes
* Security requirements change
* Plugin permissions change
* External integrations change
* Backup or export features are added

---

### `Future_Features.md`

Tracks ideas that are not part of the immediate build.

It should include:

* Possible future features
* Deferred integrations
* Wall-display ideas
* Multi-user ideas
* Advanced automation ideas
* Nice-to-have improvements

Update this when:

* A feature idea is worth preserving but not building yet
* A feature is moved out of current scope
* A deferred feature becomes part of the active roadmap
* A future feature is rejected

---

## Architecture Decision Records

Architecture Decision Records are stored in:

```text
docs/adr/
```

ADRs explain important technical or product decisions.

Each ADR should answer:

* What decision was made?
* Why was it made?
* What alternatives were considered?
* What are the consequences?
* Is the decision final, accepted, proposed, or superseded?

---

## Planned ADRs

### `ADR-001-local-first-architecture.md`

Explains the decision to make HomeHub local-first.

Should cover:

* Privacy benefits
* Offline use
* Reduced cloud dependency
* Local storage implications
* Tradeoffs compared with cloud-first apps

---

### `ADR-002-plugin-based-system.md`

Explains the decision to make HomeHub plugin-based.

Should cover:

* Modularity
* Long-term extensibility
* Plugin boundaries
* Plugin permissions
* Added complexity

---

### `ADR-003-accessibility-first-design.md`

Explains the decision to make accessibility a core architectural concern.

Should cover:

* Keyboard navigation
* Screen-reader compatibility
* ADHD-friendly design
* Dyslexia-friendly design
* Low cognitive load
* Future accessibility modes

---

### `ADR-004-local-database-choice.md`

Explains the selected local database technology.

This ADR should remain incomplete until a database is selected.

Should eventually cover:

* Chosen database
* Alternatives considered
* Migration support
* Plugin data storage
* Backup implications
* Security implications

---

### `ADR-005-api-integration-boundaries.md`

Explains how external APIs are separated from core HomeHub logic.

Should cover:

* Calendar APIs
* Weather APIs
* Transit APIs
* Authentication boundaries
* Offline behaviour
* Data normalization
* Plugin integration limits

---

## Repository-Level State

Project status is tracked separately in the repository root:

```text
PROJECT_STATE.md
```

That file should be used to track:

* Current milestone
* Completed documents
* Current branch
* Next task
* Known decisions
* Open questions
* Last completed commit, if known

`PROJECT_STATE.md` does not need to be updated after every small change. It should be updated when stopping work, taking a longer break, changing direction, finishing a major milestone, or when the repository state becomes confusing.

---

## When To Update Documentation

Update documentation when a change affects future development.

Examples:

* A feature is added or removed
* A technical decision is made
* A workflow changes
* A security rule changes
* A plugin boundary changes
* A database structure changes
* An integration requirement changes
* A known limitation is discovered

Do not update documentation for:

* Temporary experiments
* Minor wording preferences
* Small implementation details that are obvious from code
* Abandoned ideas unless they explain an important decision

---

## How To Add New Documentation

When adding a new document:

1. Give it a clear filename.
2. Use a descriptive title.
3. Explain the document’s purpose near the top.
4. Use headings generously.
5. Keep sections easy to scan.
6. Link or reference related documents when useful.
7. Commit the document as its own logical change.

Recommended commit format:

```text
Add documentation for [topic]
```

Example:

```text
Add documentation for backup strategy
```

---

## Guidance for AI Assistants

AI assistants helping with HomeHub should follow these rules:

* Read `PROJECT_STATE.md` first when resuming work.
* Use this `docs/README.md` file to understand the documentation structure.
* Keep HomeHub local-first unless the user explicitly changes that direction.
* Preserve privacy-first and accessibility-first requirements.
* Do not invent completed implementation work.
* Do not assume unresolved technology choices are final.
* Write complete files when asked.
* State exactly which file content belongs in.
* Prefer one document or feature per commit.
* Avoid adding unnecessary complexity.
* Keep future ideas separate from current requirements.

---

## Documentation Status

Completed documentation:

* `README.md`
* `docs/Vision.md`
* `docs/PRD.md`
* `docs/Architecture.md`
* `docs/Development_Principles.md`
* `docs/Plugin_Specification.md`
* `docs/Database_Schema.md`
* `docs/API_Integrations.md`
* `docs/UI_Guidelines.md`
* `docs/Security.md`
* `docs/README.md`

Remaining planned documentation:

* `docs/Future_Features.md`
* `docs/adr/ADR-001-local-first-architecture.md`
* `docs/adr/ADR-002-plugin-based-system.md`
* `docs/adr/ADR-003-accessibility-first-design.md`
* `docs/adr/ADR-004-local-database-choice.md`
* `docs/adr/ADR-005-api-integration-boundaries.md`

---

## Maintenance Notes

This file should be updated whenever:

* A new documentation file is added
* A planned documentation file is removed
* Documentation structure changes
* ADRs are added, renamed, accepted, superseded, or removed
* A future contributor would be confused without the update

Keep this file accurate, but do not let documentation maintenance block forward progress.

