# ADR-005: API Integration Boundaries

## Status

Accepted

---

## Context

HomeHub may connect to external services for useful dashboard features.

Potential integrations include:

- Google Calendar
- Weather APIs
- Transit APIs
- Map services
- Notification services
- Future cloud backup providers
- Future AI services

These integrations can make HomeHub more useful, but they also create risks:

- Privacy exposure
- Credential handling
- Network failures
- Vendor lock-in
- Unclear data ownership
- Plugin overreach
- Difficult testing
- Tight coupling between external APIs and core logic

Because HomeHub is local-first and privacy-first, external integrations must have clear boundaries.

---

## Decision

HomeHub will isolate external API integrations from core application logic.

External service logic should live in dedicated integration layers or plugins.

The core application should not depend directly on provider-specific API responses.

External data should be normalized before being stored or displayed.

---

## Goals

API integration boundaries should:

- Protect core application logic from vendor-specific complexity.
- Make integrations optional.
- Support offline behaviour.
- Reduce privacy exposure.
- Make testing easier.
- Allow providers to be replaced later.
- Prevent unrelated plugins from accessing external data unnecessarily.
- Keep credentials separate from ordinary app data.

---

## Integration Boundary Rules

### 1. External APIs Are Optional

HomeHub core functionality should not require external APIs.

The dashboard should remain useful without:

- Calendar sync
- Weather updates
- Transit lookups
- Map services
- Cloud backup
- AI services

---

### 2. Provider Logic Must Be Isolated

Provider-specific logic should not spread throughout the app.

For example, Google Calendar-specific code should not appear directly inside dashboard UI components.

Preferred structure:

```text
UI component
↓
HomeHub calendar service
↓
Calendar integration adapter
↓
External provider API
```

---

### 3. Normalize External Data

External API responses should be converted into HomeHub internal models.

Example internal calendar event model:

```text
Event
- id
- source
- external_id
- title
- start_time
- end_time
- location
- description_status
- last_synced_at
```

The app should avoid depending directly on raw provider response fields.

---

### 4. Store Only What Is Needed

HomeHub should avoid storing unnecessary external data.

Examples:

- Do not store full raw calendar responses unless required.
- Do not store full weather API responses if only forecast summary is needed.
- Do not store transit route history unless the user needs it.
- Do not duplicate sensitive descriptions unnecessarily.

---

### 5. Credentials Stay Separate

API credentials must not be stored in ordinary database tables.

Credentials include:

- OAuth access tokens
- OAuth refresh tokens
- API keys
- Client secrets
- Webhook secrets

Credentials should be stored through operating-system credential storage where possible.

---

### 6. Integrations Must Fail Safely

External services can fail.

HomeHub should handle:

- Expired credentials
- Missing network
- API rate limits
- Invalid responses
- Provider outages
- Permission changes
- Revoked access

Failure should not crash the dashboard.

---

## Calendar Integration Boundary

Calendar integration is expected to be one of the most sensitive integrations.

Calendar data may include:

- Personal appointments
- Legal appointments
- Medical appointments
- School events
- Work commitments
- Locations
- Private notes
- Relationships and contacts

Rules:

- Request the narrowest practical permissions.
- Store only data required for dashboard use.
- Allow cached data to be cleared.
- Allow integration to be disconnected.
- Do not expose calendar data to unrelated plugins by default.
- Treat event notes as sensitive.
- Keep HomeHub notes separate from provider calendar notes unless explicitly synced.

---

## Weather Integration Boundary

Weather integrations are lower sensitivity than calendar integrations but may still expose location data.

Rules:

- Allow approximate location where practical.
- Store only forecast data needed for display.
- Avoid storing unnecessary location history.
- Do not expose weather location to unrelated plugins unless needed.
- Make provider use clear to the user.

---

## Transit Integration Boundary

Transit integrations may expose sensitive location and routine data.

Transit data may reveal:

- Home location
- Appointment locations
- School/work routines
- Frequently visited places

Rules:

- Use only the appointment and route data required.
- Avoid storing full route history unless needed.
- Make data sharing with transit or map services clear.
- Allow saved locations to be edited or deleted.
- Do not expose unrelated calendar notes to transit plugins.

---

## AI Integration Boundary

AI features are future candidates and should not be assumed in the core system.

If AI integrations are added later, they must follow stricter boundaries.

Rules:

- AI features must be opt-in.
- Sensitive local data must not be sent externally without clear user action.
- The user should know what data is being processed.
- AI-generated content should not silently overwrite user data.
- Local AI should be preferred where practical.
- External AI services should be isolated behind adapters.

---

## Backup Integration Boundary

Backup integrations may send local data to user-selected destinations.

Rules:

- Cloud backup must be opt-in.
- Backup contents must be clear.
- Credentials must be stored securely.
- Encrypted backups should be considered.
- Restore behaviour must be tested.
- Backup failures must not corrupt local data.

---

## Offline Behaviour

HomeHub must remain useful when integrations fail.

When offline, HomeHub should:

- Show cached calendar data where available.
- Show cached weather data where appropriate.
- Show local notes and tasks.
- Allow local edits.
- Mark external data as stale.
- Retry sync safely later.
- Avoid deleting local data because external sync failed.

Example message:

```text
Weather could not be updated. Showing last saved forecast.
```

---

## Testing Implications

External integrations should be testable without contacting real services.

Testing should support:

- Mock providers
- Fake API responses
- Expired token scenarios
- Offline scenarios
- Rate-limit scenarios
- Invalid response scenarios
- Permission denied scenarios

Tests should not use real personal data.

---

## Logging Rules

Integration logs must be sanitized.

Logs may include:

- Provider name
- Error category
- Status code
- Timestamp
- Sync result

Logs must not include:

- OAuth tokens
- API keys
- Full calendar descriptions
- Sensitive notes
- Full addresses unless explicitly needed for debugging
- Raw personal API responses

---

## Alternatives Considered

### Direct API Calls From UI Components

Advantages:

- Faster initial development
- Less abstraction

Disadvantages:

- Tight coupling
- Harder testing
- Harder provider replacement
- Higher privacy risk
- Poor separation of concerns

Decision:

Rejected.

---

### Central Cloud Backend For All Integrations

Advantages:

- Easier provider normalization
- Easier multi-device sync
- Centralized credential handling

Disadvantages:

- Breaks local-first model
- Requires infrastructure
- Increases privacy exposure
- Adds authentication burden
- Adds maintenance cost

Decision:

Rejected for the initial architecture.

---

### Plugin-Owned Integrations Only

Advantages:

- Strong modularity
- Plugins fully own external services

Disadvantages:

- Risk of inconsistent credential handling
- Risk of duplicated API logic
- Risk of inconsistent privacy rules
- Harder shared calendar/task/transit interactions

Decision:

Partially accepted.

Plugins may own integrations, but they must use shared security, credential, logging, and permission rules.

---

## Consequences

### Positive Consequences

- Cleaner architecture
- Better privacy boundaries
- Easier testing
- Easier provider replacement
- Safer plugin system
- Better offline behaviour
- Less vendor lock-in

---

### Negative Consequences

- More initial structure required
- Requires normalized internal models
- Requires adapter design
- Requires clear documentation
- May slow early integration development

---

## Implementation Implications

HomeHub should include:

- Integration adapters
- Internal normalized models
- Shared credential service
- Shared logging rules
- Offline handling
- Sync status tracking
- Plugin permission declarations
- Clear disconnect and cache-clearing behaviour

---

## Related Documents

- `docs/API_Integrations.md`
- `docs/Security.md`
- `docs/Plugin_Specification.md`
- `docs/Architecture.md`
- `docs/adr/ADR-001-local-first-architecture.md`

---

## Decision Summary

HomeHub will isolate external API integrations behind clear boundaries.

External APIs must remain optional, provider-specific logic must be isolated, credentials must be handled securely, and external data must be normalized before being used by the core dashboard.

This protects HomeHub’s local-first, privacy-first, and maintainability goals.