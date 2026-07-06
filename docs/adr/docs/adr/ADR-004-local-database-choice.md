# ADR-004: Local Database Choice

## Status

Proposed

---

## Context

HomeHub is a local-first application.

It needs a reliable local data store for:

- Tasks
- Notes
- Calendar cache
- Event-linked notes
- Recurring appointment notes
- Plugin settings
- Dashboard layout
- User preferences
- Local reminders
- Saved locations
- Plugin-owned data

The database must support long-term maintainability, backup, migration, and future plugin expansion.

The final application framework has not yet been selected, so this decision remains proposed rather than accepted.

---

## Decision

HomeHub will use a local database.

The preferred candidate is SQLite unless future framework decisions create a strong reason to choose another option.

SQLite is the current leading choice because it is:

- Local-first
- Stable
- Mature
- Widely supported
- Lightweight
- Easy to back up
- Suitable for desktop applications
- Suitable for structured household data
- Compatible with many programming languages and frameworks

---

## Requirements

The local database must support:

- Reliable local reads and writes
- Structured data
- Schema migrations
- Plugin-owned data
- Backup and restore
- Reasonable performance
- Long-term maintainability
- Offline use
- Clear developer tooling

---

## Expected Data Categories

The database should store:

- Tasks
- Notes
- Calendar event cache
- Event note links
- Recurring event note instances
- Plugin settings
- Dashboard widget configuration
- Saved locations
- User preferences
- Integration metadata
- Local reminders

The database should not store:

- Raw API secrets
- OAuth refresh tokens
- Passwords
- Encryption keys
- Unnecessary raw API responses
- Large binary files unless specifically designed for that purpose

Credentials should be stored separately using operating-system credential storage.

---

## Preferred Option: SQLite

SQLite is the preferred candidate.

### Advantages

- No server required
- Works offline
- Simple deployment
- Easy local backup
- Well understood
- Strong tooling
- Good performance for local applications
- Supports relational data
- Supports migrations
- Can be inspected during development
- Supported across Linux, Windows, and macOS

### Disadvantages

- Requires migration discipline
- Not ideal for multi-user networked access
- Sync requires separate design
- Encryption requires additional tooling or design
- Plugin data boundaries must be carefully designed

---

## Alternatives Considered

### Local JSON Files

Advantages:

- Very simple
- Easy to inspect
- Useful for early prototypes

Disadvantages:

- Poor for relational data
- Harder migrations
- Higher risk of corruption with complex writes
- Poor query support
- Not ideal for plugin expansion

Decision:

Acceptable for temporary prototypes only.

---

### IndexedDB

Advantages:

- Works well in browser-based apps
- Local-first
- No server required

Disadvantages:

- Tied to browser/runtime context
- Less convenient for desktop-style data inspection
- Backup/export can be more complex
- Framework choice may constrain access patterns

Decision:

Possible if HomeHub becomes browser-first, but not preferred yet.

---

### DuckDB

Advantages:

- Strong analytical capabilities
- Local database
- Good for data-heavy querying

Disadvantages:

- More than HomeHub likely needs
- Better suited to analytics than ordinary app storage
- Less conventional for personal app state

Decision:

Rejected for initial app storage.

---

### PostgreSQL

Advantages:

- Powerful
- Mature
- Excellent relational database

Disadvantages:

- Requires a server process
- More complex deployment
- Not ideal for simple local-first desktop use
- Adds unnecessary maintenance burden

Decision:

Rejected for the initial local-first architecture.

---

## Plugin Data Implications

Plugins need a clear data ownership model.

Possible approaches:

1. Shared database with plugin-specific tables.
2. Shared database with namespaced plugin tables.
3. Separate database per plugin.
4. Core database plus plugin storage directory.

The preferred early approach is:

```text
Shared SQLite database with clearly namespaced plugin tables.
```

Example:

```text
core_tasks
core_notes
core_settings
plugin_calendar_events
plugin_weather_cache
plugin_transit_routes
```

This may change after implementation begins.

---

## Migration Requirements

HomeHub must eventually support database migrations.

Migration rules:

- Track schema version.
- Apply migrations in order.
- Never silently discard user data.
- Back up before risky migrations where practical.
- Keep migrations understandable.
- Document major schema changes.

---

## Backup Implications

SQLite supports simple file-based backup, but backup design still matters.

Backup requirements:

- User-controlled backup location
- Clear backup contents
- Future encrypted backup support
- Restore testing
- Avoid backing up credentials with ordinary data
- Avoid accidental cloud backup without user choice

---

## Security Implications

The local database may contain sensitive information.

Rules:

- Do not commit database files to Git.
- Do not store credentials in database tables.
- Do not log sensitive database contents.
- Consider encryption later.
- Keep database backups private.
- Treat event notes and location data as sensitive.

Related document:

```text
docs/Security.md
```

---

## Consequences

### Positive Consequences

- Supports local-first architecture
- Avoids server dependency
- Keeps deployment simple
- Makes backups practical
- Supports structured data
- Supports long-term growth
- Works well for desktop applications

---

### Negative Consequences

- Requires schema design
- Requires migration strategy
- Sync remains future work
- Encryption requires more decisions
- Plugin boundaries require discipline

---

## Decision Status Notes

This ADR remains proposed because the frontend/backend framework has not been selected yet.

Once the application stack is selected, this ADR should be reviewed and either:

- Accepted as SQLite
- Updated with a different database choice
- Superseded by a new ADR

---

## Related Documents

- `docs/Database_Schema.md`
- `docs/Security.md`
- `docs/Architecture.md`
- `docs/adr/ADR-001-local-first-architecture.md`

---

## Decision Summary

HomeHub will use a local database.

SQLite is the preferred candidate because it fits HomeHub’s local-first, privacy-first, maintainable desktop application goals.

The decision remains proposed until the final application framework is selected.