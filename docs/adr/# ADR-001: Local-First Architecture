Next file:

```text
docs/adr/ADR-001-local-first-architecture.md
```

Create the `adr` folder first if it does not exist:

```bash
mkdir -p docs/adr
```

Paste this document:

````markdown
# ADR-001: Local-First Architecture

## Status

Accepted

---

## Context

HomeHub is intended to be a personal productivity and household dashboard that runs first on Ubuntu, with possible future support for Windows and macOS.

The dashboard may eventually integrate with external services such as:

- Google Calendar
- Weather providers
- Transit APIs
- Map services
- Notification services
- Optional cloud backup providers

However, the core purpose of HomeHub is to help the user manage daily household information without depending on a cloud service for basic functionality.

HomeHub may store sensitive information, including:

- Calendar events
- Appointment notes
- Recurring appointment notes
- Tasks
- Household routines
- Saved locations
- Transit-related destinations
- Plugin settings
- Personal reminders

Because of this, the system architecture needs to prioritize privacy, offline access, user control, and long-term maintainability.

---

## Decision

HomeHub will use a local-first architecture.

Core application data will be stored locally on the user’s device by default.

External services may be used only for optional integrations, such as calendar sync, weather lookup, transit lookup, or future backup features.

The application should remain useful when offline.

---

## What Local-First Means for HomeHub

Local-first means:

- The core app can run without a cloud account.
- Core data is stored on the user’s machine.
- The dashboard remains usable without internet access.
- External integrations are optional.
- External integrations must be clearly disclosed.
- Data should not be sent outside the device unless the user enables a feature that requires it.
- Local data remains the source of truth where practical.
- Sync failures should not destroy or hide local data.

---

## Data That Should Be Local By Default

The following data should remain local unless the user explicitly enables sync or export features:

- Tasks
- Notes
- Event-linked notes
- Recurring appointment notes
- Dashboard layout
- Plugin settings
- User preferences
- Local reminders
- Saved household information
- Saved locations
- Local plugin data

---

## External Integration Boundaries

External integrations are allowed, but they must be treated as boundary systems.

Examples:

### Calendar

A calendar integration may retrieve event data from an external calendar provider.

HomeHub should store only what is needed for dashboard use and avoid unnecessary duplication of sensitive calendar data.

---

### Weather

A weather integration may send a saved location or approximate region to a weather provider.

The weather plugin should not need access to calendar notes, tasks, or unrelated personal data.

---

### Transit

A transit integration may use appointment time, destination, and a starting location to calculate travel information.

Transit integrations should not receive unrelated notes or full calendar history by default.

---

### Backup

A backup integration may copy local data to a user-selected location.

Cloud backup must be opt-in, clearly disclosed, and preferably support encryption in the future.

---

## Alternatives Considered

### Cloud-First Architecture

A cloud-first architecture would store most data on a remote server and make the local app a client.

Advantages:

- Easier cross-device sync
- Easier remote access
- Easier centralized backup
- Easier multi-device support

Disadvantages:

- Requires server infrastructure
- Adds hosting and maintenance cost
- Increases privacy risk
- Makes basic use dependent on internet access
- Creates account and authentication requirements
- Makes the project harder to build and maintain as a solo or small project

Decision:

Rejected for the initial architecture.

---

### Hybrid Cloud Architecture

A hybrid architecture would use local storage for some data and cloud storage for other data.

Advantages:

- Could support sync later
- Could keep some data local
- Could allow optional remote features

Disadvantages:

- More complex data model
- Requires clear conflict handling
- Requires stronger authentication design
- Creates ambiguity about source of truth
- Adds security and privacy complexity before the core app exists

Decision:

Deferred.

HomeHub may support optional cloud features later, but the foundation should remain local-first.

---

### Local-Only Architecture

A local-only architecture would completely avoid external services.

Advantages:

- Strong privacy
- Simple trust model
- No external API dependencies
- Works offline

Disadvantages:

- Calendar sync would be limited
- Weather would be unavailable or manual
- Transit support would be limited
- User would lose useful dashboard features

Decision:

Rejected as too restrictive.

HomeHub should be local-first, not local-only.

---

## Consequences

### Positive Consequences

- Better privacy by default
- Useful offline behaviour
- Reduced dependency on external services
- Easier personal ownership of data
- Lower infrastructure cost
- Simpler early deployment
- More suitable for a personal dashboard
- Better alignment with accessibility and reliability goals

---

### Negative Consequences

- Cross-device sync becomes harder
- Remote access becomes harder
- Backups require separate design
- Some integrations still require internet access
- Local data loss is possible without backup planning
- Plugin boundaries must be carefully designed
- Credential storage must be handled properly on each operating system

---

## Implementation Implications

HomeHub should be designed so that:

- Core data is stored locally.
- External API logic is separated from core application logic.
- Plugins do not require unrestricted access to local data.
- Integrations can fail without breaking the whole dashboard.
- Offline mode is expected, not exceptional.
- Credentials are stored separately from ordinary app data.
- Local backup and restore can be added later.
- The app does not require login for basic local use.

---

## Offline Behaviour Requirements

When offline, HomeHub should still allow the user to:

- View saved dashboard data
- View local tasks
- View local notes
- Add and edit local notes
- Add and edit local tasks
- View cached calendar data where available
- See that external data may be stale
- Continue using non-network plugins

When offline, HomeHub may not be able to:

- Sync calendar changes
- Fetch weather updates
- Fetch transit estimates
- Refresh external API data
- Complete cloud backup

Offline failures should be shown clearly without alarming the user.

Example:

```text
Calendar could not sync. Showing last saved calendar data from 8:30 AM.
````

---

## Security Implications

Local-first does not mean security can be ignored.

The local machine may contain sensitive data.

Security requirements include:

* Do not store credentials in plain text.
* Do not commit local databases to Git.
* Do not log sensitive personal data.
* Do not expose local web servers to the network by default.
* Do not allow plugins unrestricted access to all data.
* Consider encrypted backups in the future.
* Use operating-system credential storage where possible.

Related document:

```text
docs/Security.md
```

---

## Plugin Implications

A local-first plugin system should follow least-privilege principles.

Plugins should declare:

* What data they read
* What data they write
* Whether they use external network access
* Whether they store local data
* Whether they handle sensitive information
* What permissions they require

Plugins should not assume access to the full local database.

Related document:

```text
docs/Plugin_Specification.md
```

---

## Future Considerations

Local-first architecture does not prevent future features such as:

* Optional encrypted cloud backup
* Optional cross-device sync
* Optional local network access
* Optional mobile companion app
* Optional multi-user household profiles

However, each of those features must be added deliberately and documented with its own security and architecture decisions.

---

## Decision Summary

HomeHub will be local-first.

Core functionality should run locally, store data locally, and remain useful offline.

External services are allowed only as optional integrations with clear boundaries.

This decision supports HomeHub’s privacy-first, accessibility-first, and maintainability goals.
