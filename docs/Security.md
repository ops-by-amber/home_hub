Create this file:

```text
docs/Security.md
```

Paste this full document:

````markdown
# HomeHub Security

## Purpose

This document defines HomeHub’s security, privacy, credential handling, plugin safety, and external integration boundaries.

HomeHub is a local-first personal productivity dashboard. Its security model must protect household data, reduce unnecessary cloud exposure, and make external integrations clear, optional, and controlled by the user.

---

## Security Goals

HomeHub must be designed around the following security goals:

- Keep core household data local by default.
- Avoid unnecessary collection of sensitive information.
- Store credentials securely.
- Make external service connections explicit.
- Prevent plugins from accessing data they do not need.
- Protect local data from accidental loss.
- Provide clear security boundaries for future development.
- Keep the security model understandable and maintainable.

---

## Core Security Principles

### 1. Local First

HomeHub should work without requiring a cloud account.

Core data should remain on the user’s device unless the user explicitly enables an integration that sends or receives data from an external service.

Examples of local-first data:

- Tasks
- Notes
- Dashboard layout
- Plugin settings
- Local reminders
- Event notes
- Recurring appointment notes
- User preferences

---

### 2. Privacy First

HomeHub should collect and store only what it needs.

Avoid storing unnecessary personal information.

For example, HomeHub does not need to store:

- Full contact lists unless required by a calendar or messaging plugin
- Precise location history
- Unused calendar metadata
- Raw API responses after useful data has been extracted
- Analytics data unrelated to functionality

---

### 3. Explicit External Integrations

Any connection to an external service must be clearly disclosed.

Examples:

- Google Calendar
- Weather APIs
- Transit APIs
- Email providers
- Map services
- Notification services

The user should be able to understand:

- What service is being connected
- What data is requested
- What data is stored locally
- Whether data is sent outside the device
- How to disconnect the integration

---

### 4. Least Privilege

HomeHub and its plugins should request only the minimum access needed.

A calendar plugin should not automatically receive access to notes, tasks, transit data, or unrelated plugin data unless there is a clear reason.

A weather plugin should not need access to calendar event details.

A transit plugin may need appointment location and time, but should not need access to unrelated notes.

---

### 5. Secure Defaults

The safest reasonable option should be the default.

Examples:

- External integrations disabled by default.
- Plugins disabled until installed or enabled.
- Credentials stored in the operating system credential store where possible.
- Debug logs should not include secrets.
- Sensitive settings should not be shown casually on the dashboard.
- Backups should not be enabled to cloud storage without user action.

---

## Data Classification

HomeHub data should be treated according to sensitivity.

### Low Sensitivity

Examples:

- UI theme
- Dashboard widget order
- General app preferences
- Non-personal plugin display settings

Protection requirement:

- Store locally.
- No special encryption required beyond normal local storage unless future requirements change.

---

### Moderate Sensitivity

Examples:

- Tasks
- Household routines
- Dashboard notes
- Plugin settings
- Weather location settings
- Transit stop preferences

Protection requirement:

- Store locally.
- Avoid sending to external services unless required.
- Do not include in telemetry.
- Include in local backup only if the user enables backup.

---

### High Sensitivity

Examples:

- Calendar event details
- Event notes
- Recurring appointment notes
- Location-based appointments
- API tokens
- OAuth refresh tokens
- Email-derived data, if email integration is ever added
- Any health, legal, family, financial, or school-related notes

Protection requirement:

- Store locally.
- Avoid unnecessary duplication.
- Do not log.
- Do not expose to unrelated plugins.
- Store credentials using secure credential handling.
- Clearly document any external transmission.

---

## Local Data Storage

HomeHub should use local storage for core application data.

The exact local database has not been selected yet.

Potential options may include:

- SQLite
- DuckDB
- Local JSON files for early prototypes
- IndexedDB if browser-based
- A framework-specific local persistence layer

The selected storage system must support:

- Reliable local reads and writes
- Backup and restore
- Reasonable migration path
- Clear schema ownership
- Plugin data separation
- Future encryption options if needed

---

## Local Database Security

The local database should follow these rules:

- Do not store API secrets in ordinary database tables.
- Do not store raw OAuth tokens in plain text database records.
- Separate core data from plugin-owned data where practical.
- Track schema versions.
- Avoid storing duplicate sensitive data.
- Avoid storing raw external API responses unless needed.
- Sanitize data before logging or exporting.

---

## Credential Handling

Credentials must be handled separately from ordinary application data.

Examples of credentials:

- API keys
- OAuth access tokens
- OAuth refresh tokens
- Service passwords
- Webhook secrets
- Encryption keys

Credentials should not be committed to Git.

Credentials should not be stored in:

- Source code
- Documentation examples using real values
- Plain text config files
- Logs
- Test fixtures
- Screenshots
- Issue reports

---

## Preferred Credential Storage

On Ubuntu, HomeHub should prefer operating-system-supported secure storage.

Possible options:

- GNOME Keyring
- Secret Service API
- libsecret
- Framework-supported secure storage wrapper

The final credential storage implementation will depend on the chosen application framework.

For future Windows/macOS support, HomeHub should use equivalent platform credential storage:

- Windows Credential Manager
- macOS Keychain

---

## Environment Files

Environment files may be used during development, but they must be handled carefully.

Allowed:

```text
.env.example
````

Not allowed:

```text
.env
.env.local
.env.production
```

Rules:

* `.env.example` may contain placeholder values only.
* Real `.env` files must be ignored by Git.
* Documentation should never include real secrets.
* Setup instructions should explain how to create local environment files safely.

---

## Git Security Rules

The repository must not contain secrets.

The `.gitignore` file should exclude:

```text
.env
.env.*
*.key
*.pem
*.p12
*.sqlite
*.sqlite3
*.db
local_data/
secrets/
tokens/
```

Exceptions may be made for intentional test fixtures, but they must not contain real credentials or real personal data.

---

## Logging Rules

Logs are useful for debugging, but they can expose private information.

HomeHub logs must not include:

* API tokens
* OAuth refresh tokens
* Passwords
* Full calendar descriptions
* Sensitive notes
* Full email bodies
* Private addresses unless required for debugging and explicitly enabled
* Raw API responses containing personal data

Logs may include:

* Error category
* Plugin name
* Timestamp
* Non-sensitive status codes
* General sync status
* Sanitized error messages

Example acceptable log:

```text
Calendar sync failed: token refresh error.
```

Example unacceptable log:

```text
Calendar sync failed for event "Family court appointment at 123 Main Street" using token ya29...
```

---

## Plugin Security Model

Plugins are a major part of HomeHub’s architecture, so plugin boundaries must be clear.

Plugins should not automatically receive unrestricted access to the full application state.

Each plugin should declare:

* Plugin name
* Plugin version
* Required permissions
* Data it reads
* Data it writes
* External services it contacts
* Refresh behaviour
* Whether it stores local data
* Whether it handles sensitive data

---

## Plugin Permissions

HomeHub should eventually support plugin-level permissions.

Possible permission categories:

```text
calendar:read
calendar:write
tasks:read
tasks:write
notes:read
notes:write
weather:read
transit:read
location:read
settings:read
settings:write
notifications:send
external_network:access
```

Initial versions may not have a full permission engine, but plugin documentation should be designed as if permissions will exist.

---

## Plugin Data Access

Plugins should only access data required for their function.

Examples:

### Weather Plugin

Allowed:

* Saved location or general region
* Weather API configuration
* Weather display preferences

Not allowed by default:

* Calendar event descriptions
* Notes
* Tasks
* Personal contacts

---

### Transit Plugin

Allowed:

* Event time
* Event location
* Saved home location or start location
* Transit API configuration

Not allowed by default:

* Full notes unrelated to travel
* Calendar events that do not need transit calculation
* Unrelated plugin data

---

### Calendar Plugin

Allowed:

* Calendar event metadata
* Event times
* Event titles
* Event locations
* Calendar integration credentials

Limited or protected:

* Event descriptions
* Attached notes
* Sensitive calendar metadata

---

## External Network Access

External network access should be intentional.

The core HomeHub application should not silently contact external services except for:

* User-enabled integrations
* Explicit update checks, if implemented
* User-triggered sync actions
* Required package or framework behaviour during development

Plugins that require network access must disclose it.

Example:

```markdown
This plugin connects to the selected weather provider to retrieve forecast data for the configured location.
```

---

## Calendar Integration Security

Calendar integration will likely be one of HomeHub’s most sensitive features.

Calendar data may reveal:

* Personal appointments
* School schedules
* Medical appointments
* Legal appointments
* Work commitments
* Household routines
* Locations
* Relationships and contacts

Rules:

* Request the narrowest practical calendar scope.
* Store only the calendar data needed for dashboard display.
* Avoid storing full calendar history unless required.
* Treat event notes as sensitive.
* Allow calendar integration to be disabled.
* Allow local cached calendar data to be cleared.
* Do not expose calendar data to unrelated plugins.

---

## Notes Security

Notes may contain sensitive information.

HomeHub should treat all user-created notes as private by default.

Rules:

* Notes should remain local unless explicitly synced.
* Notes attached to calendar events should not be sent back to the calendar provider unless the user chooses that behaviour.
* Notes should not be exposed to plugins without permission.
* Notes should not appear in logs.
* Deleted notes should be removed from active views and handled consistently in storage.

---

## Location Data

Location data should be treated as sensitive.

Examples:

* Home address
* Appointment addresses
* Transit start locations
* Frequently used destinations
* School or workplace locations

Rules:

* Store only what is needed.
* Prefer user-defined labels where possible.
* Do not send location data to a service unless needed for a user-enabled feature.
* Make transit and map-related data sharing clear.
* Allow saved locations to be edited or deleted.

---

## Backups

Backups are important, but they can expose private data.

Future backup support should follow these rules:

* Backups should be user-controlled.
* Backup location should be visible to the user.
* Cloud backup should not be enabled by default.
* Sensitive backup contents should be documented.
* Encrypted backups should be considered.
* Restore behaviour should be tested.

Potential backup types:

* Manual local export
* Scheduled local backup
* Encrypted local backup
* User-selected cloud folder backup

---

## Import and Export

Import/export features should avoid accidental exposure of private data.

Export options should clearly identify what is included.

Possible export categories:

* Tasks only
* Notes only
* Calendar notes only
* Plugin settings
* Full local backup
* Debug report with sensitive data removed

Debug exports should be sanitized by default.

---

## Authentication

HomeHub is currently intended as a local-first single-user dashboard.

For version 1, full user account authentication may not be required if the app runs locally on the user’s own machine.

However, authentication may become necessary if HomeHub later supports:

* Remote access
* Mobile access
* Multi-user households
* Shared dashboards
* Cloud sync
* Web login
* Networked home display devices

Until then, HomeHub should avoid adding unnecessary account systems.

---

## Local App Access

If HomeHub runs as a local web app, it should avoid exposing itself broadly on the network.

Rules:

* Bind to localhost by default.
* Do not expose the app to the LAN unless explicitly enabled.
* Use clear warnings before enabling network access.
* Avoid unauthenticated remote access.
* Use secure local configuration defaults.

Preferred default:

```text
127.0.0.1
```

Avoid as default:

```text
0.0.0.0
```

---

## API Integration Boundaries

External integrations should be isolated from core logic where practical.

Integration code should:

* Be separated from UI components.
* Avoid spreading API-specific logic throughout the app.
* Normalize external data before storing or displaying it.
* Handle expired credentials safely.
* Handle offline mode gracefully.
* Avoid crashing the dashboard when an external service fails.

---

## Offline Behaviour

HomeHub should remain useful offline.

If an external integration fails, HomeHub should:

* Keep displaying locally cached data where appropriate.
* Clearly show that data may be stale.
* Avoid deleting local data because a sync failed.
* Allow the user to continue using local tasks and notes.
* Retry sync safely.

Example:

```text
Calendar could not sync. Showing last saved calendar data from 8:30 AM.
```

---

## Dependency Security

HomeHub should minimize unnecessary dependencies.

Rules:

* Use well-maintained packages.
* Avoid abandoned libraries.
* Avoid packages with excessive permissions or unclear purpose.
* Review major dependencies before adoption.
* Keep dependency lists understandable.
* Prefer boring, stable technology over novelty.

Before adding a dependency, ask:

* What problem does this solve?
* Is it actively maintained?
* Is it necessary?
* Does it increase security risk?
* Can the same result be achieved more simply?

---

## Development Security

Development practices should reduce accidental exposure.

Rules:

* Use placeholder data in examples.
* Do not use real personal calendar data in tests.
* Do not commit local databases.
* Do not commit credentials.
* Keep test fixtures fake.
* Review diffs before committing.
* Use meaningful commit messages.

---

## Test Data

Test data must be fictional.

Avoid using:

* Real names
* Real addresses
* Real appointment details
* Real phone numbers
* Real email content
* Real tokens
* Real API responses containing personal data

Good example:

```text
Dentist appointment at 3:00 PM
```

Better test example:

```text
Sample appointment at 3:00 PM
```

---

## Security Review Checklist

Before implementing or merging a feature, check:

* Does this feature store personal data?
* Does this feature send data outside the device?
* Does this feature require credentials?
* Are credentials stored securely?
* Does this feature expose data to plugins?
* Does this feature write to logs?
* Does this feature work offline?
* Can the user disable or remove the integration?
* Is the data flow documented?
* Is the safest reasonable behaviour the default?

---

## Known Security Risks

The following risks are known and should be addressed during implementation:

* Calendar integrations may expose sensitive personal schedules.
* Transit integrations may reveal home and appointment locations.
* Plugins may accidentally receive more data than needed.
* Local database files may contain sensitive information.
* Logs may accidentally capture private data.
* Backups may expose private household data.
* Development screenshots may reveal real information.
* AI-assisted coding may accidentally introduce insecure defaults.

---

## Non-Goals for Initial Version

The initial version does not need to solve every advanced security problem.

Not required for the first prototype:

* Enterprise authentication
* Multi-user permission system
* End-to-end encrypted cloud sync
* Remote web access
* Public plugin marketplace
* Advanced intrusion detection
* Full security audit automation

These may be considered later if HomeHub grows beyond a local personal dashboard.

---

## Acceptance Criteria

This document is satisfied when HomeHub has clear guidance for:

* Local-first data handling
* Privacy-first design
* Secure credential storage
* External integration boundaries
* Plugin permission expectations
* Logging restrictions
* Local database safety
* Backup risks
* Offline behaviour
* Development security practices

---

## Future Decisions

The following decisions remain open:

* Which local database will be used?
* Will the local database be encrypted?
* Which credential storage library will be selected?
* Will plugin permissions be enforced in version 1 or documented only?
* Will HomeHub support encrypted backups?
* Will HomeHub support remote access in a later version?
* Will HomeHub ever support multi-user household profiles?
* How will plugin review and trust be handled if third-party plugins are supported?
