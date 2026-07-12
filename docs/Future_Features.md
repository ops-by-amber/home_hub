Next file:

```text
docs/Future_Features.md
```

Create it and paste this:

````markdown
# HomeHub Future Features

## Purpose

This document tracks HomeHub feature ideas that are worth preserving but are not part of the immediate build.

The purpose of this file is to prevent scope creep while keeping good ideas from being lost. Features listed here are not automatically approved for development. They are candidates for later review.

---

## Current Development Priority

HomeHub’s current priority is the core local-first dashboard foundation.

Immediate work should focus on:

- Core dashboard structure
- Local data storage
- Plugin architecture
- Calendar support
- Notes attached to events
- Tasks and reminders
- Weather integration
- Transit integration planning
- Accessibility-first UI
- Privacy-first data handling

Future features should not interrupt the core foundation unless they become necessary for version 1.

---

## Future Feature Categories

Future ideas are grouped into:

- Dashboard enhancements
- Calendar and scheduling
- Transit and location intelligence
- Notes and memory
- Household management
- Automation
- AI assistance
- Accessibility modes
- Plugin ecosystem
- Backup and sync
- Multi-device support
- Wall-display mode
- Mobile companion features
- Advanced privacy and security

---

## Dashboard Enhancements

### Custom Dashboard Layouts

Allow users to fully customize the dashboard.

Possible options:

- Drag-and-drop widgets
- Resizable cards
- Multiple saved layouts
- Morning view
- Evening view
- Workday view
- Weekend view
- Minimal focus view

Status: Future candidate.

Reason deferred:

The first version needs a reliable default dashboard before advanced customization.

---

### Focus Mode

A simplified dashboard mode that shows only the next useful action.

Possible behaviour:

- Hide low-priority widgets
- Show one task or appointment at a time
- Include quick wins
- Reduce visual clutter
- Support timed focus sessions

Status: Future candidate.

Reason deferred:

Useful, but not required before the core dashboard exists.

---

### Smart Priority View

Automatically organize tasks, appointments, and reminders by urgency and usefulness.

Possible signals:

- Due time
- Estimated duration
- Transit requirements
- Appointment location
- User-defined priority
- Whether the task is blocking something else
- Time of day

Status: Future candidate.

Reason deferred:

Requires enough task and calendar data to be useful.

---

## Calendar and Scheduling

### Recurring Appointment Notes

Support separate notes for each occurrence of a recurring appointment.

Example:

A weekly counselling appointment may repeat every Wednesday, but each week may need different notes, questions, or follow-up items.

Status: High-priority future feature.

Reason deferred:

This may become part of the early calendar implementation depending on complexity.

---

### Appointment Preparation View

Create a dedicated preparation view for upcoming appointments.

Possible content:

- Appointment time
- Location
- Travel time
- Notes
- Questions to ask
- Documents to bring
- Related tasks
- Follow-up reminders

Status: Future candidate.

---

### Follow-Up Reminder Generation

After an appointment, HomeHub could suggest follow-up tasks.

Examples:

- Book next appointment
- Send email
- Upload document
- Pay invoice
- Add note
- Set reminder

Status: Future candidate.

Reason deferred:

Requires mature calendar and notes features.

---

### Conflict Detection

Detect possible scheduling conflicts.

Examples:

- Overlapping events
- Transit time conflicts
- Not enough time between appointments
- Appointments scheduled during blocked focus time
- Recurring event conflicts

Status: Future candidate.

---

## Transit and Location Intelligence

### Time-To-Leave Alerts

Notify the user when it is time to leave for an appointment.

Possible data sources:

- Calendar event time
- Event location
- Saved home location
- Transit route estimate
- Walking time
- Weather conditions
- User buffer preference

Status: Future candidate.

Reason deferred:

Requires reliable calendar, location, and transit integration.

---

### Transit Dashboard Card

Show relevant transit information on the dashboard.

Possible content:

- Next bus
- Route disruptions
- Trip duration
- Walking time
- Transfer count
- Leave-by time

Status: Future candidate.

---

### Preferred Transit Routes

Allow users to save preferred transit routes.

Examples:

- Home to school
- Home to counsellor
- Home to courthouse
- Home to grocery store
- Home to medical appointments

Status: Future candidate.

---

### Weather-Aware Travel Suggestions

Adjust travel reminders based on weather.

Examples:

- Leave earlier during heavy rain
- Bring umbrella reminder
- Transit delay warning
- Walking route caution

Status: Future candidate.

---

## Notes and Memory

### Event-Linked Notes

Attach notes directly to calendar events.

Status: Likely early feature.

Reason:

This is central to the HomeHub concept.

---

### Person-Linked Notes

Allow notes to be associated with people.

Examples:

- Doctor
- Counsellor
- Teacher
- Case worker
- Landlord
- Service provider

Status: Future candidate.

Privacy note:

This may involve sensitive personal data and must follow privacy-first storage rules.

---

### Household Reference Notes

Store practical household information.

Examples:

- Wi-Fi details
- Appliance notes
- Medication reminder notes
- School contacts
- Maintenance notes
- Emergency contacts
- Bus stop details

Status: Future candidate.

---

### Searchable Personal Knowledge Base

Allow all notes, tasks, and event notes to be searched.

Possible features:

- Search by keyword
- Search by date
- Search by person
- Search by event
- Search by tag
- Filter by plugin source

Status: Future candidate.

---

## Household Management

### Chore and Cleaning Dashboard

A household cleaning system integrated into HomeHub.

Possible features:

- Recurring chores
- Quick wins
- Room-based task lists
- Last done dates
- Priority based on overdue status
- Low-energy mode
- Weekend reset list

Status: Future candidate.

Reason deferred:

This is useful but should not block the core dashboard.

---

### Grocery and Household Inventory

Track common groceries and household supplies.

Possible features:

- Running shopping list
- Household supply list
- Low-stock reminders
- Store categories
- Estimated cost
- Tax-aware shopping helper
- Pantry staples

Status: Future candidate.

### Smart Grocery and Pantry Assistant

A future grocery assistant could help track household food and supply needs using grocery lists, pantry/fridge photos, and past shopping patterns.

Possible features:

- Grocery list card on the dashboard
- Manual grocery list entry
- Pantry and fridge inventory
- Photo-based fridge/pantry review
- Receipt history
- Common item tracking
- Low-stock suggestions
- Budget-aware grocery planning
- Household supplies tracking
- Store-specific price notes
- Reminder to replace frequently used items

Example user request:

```text
Look at what is in my fridge and pantry and help me figure out what I need to buy this week.
```

Another example:

```text
Based on what I usually buy and what I have left, make a grocery list under $150.
```

Status: Future candidate.

Reason deferred:

This feature requires local storage, image handling, receipt parsing, inventory history, and possibly AI/computer vision. It should not block the initial scheduling assistant MVP.

Privacy note:

Fridge, pantry, receipt, and shopping data may reveal household routines, budget, dietary needs, health-related information, and family structure. This data should remain local unless the user explicitly enables an external AI or cloud service.
---

### Budget-Aware Shopping Support

Support shopping decisions using budget, tax, and category tracking.

Possible features:

- Real-time grocery total
- Tax estimate
- Household vs food separation
- Price comparison notes
- Monthly grocery budget tracking
- Store-specific price notes

Status: Future candidate.

---

## Automation

### Rule-Based Automation

Allow simple user-defined rules.

Examples:

```text
If an appointment has a location, calculate travel time.
If a task is overdue, show it in Today.
If weather is rainy, show umbrella reminder.
If tomorrow has an early event, show evening preparation reminder.
````

Status: Future candidate.

---

### Morning Briefing

Generate a daily morning summary.

Possible content:

* Today’s appointments
* Weather
* Transit alerts
* Top tasks
* Notes for appointments
* Important reminders

Status: Future candidate.

---

### Evening Reset

Generate an evening planning view.

Possible content:

* Tomorrow’s appointments
* Items to prepare
* Missed tasks
* Quick cleanup suggestions
* Weather preview
* Leave-time warnings

Status: Future candidate.

---

## AI Assistance

### Local AI Planning Assistant

A future assistant could help summarize tasks, appointments, notes, and next actions.

Possible uses:

* Daily briefing
* Appointment preparation
* Task breakdown
* Note summarization
* Conflict detection
* Project planning

Status: Future candidate.

Security note:

AI features must not send sensitive local data to external services unless the user explicitly enables that behaviour.

---

### Task Breakdown Assistant

Help break large tasks into smaller steps.

Examples:

* Clean kitchen
* Prepare for appointment
* Organize documents
* Plan transit trip
* Build project milestone

Status: Future candidate.

---

### Smart Document Preparation

Help generate documents from stored notes and events.

Examples:

* Appointment notes
* School meeting notes
* Personal records
* Household reports
* Maintenance logs

Status: Future candidate.

Privacy note:

This feature may involve highly sensitive data and should require clear user action.

---

## Accessibility Modes

### Dyslexia-Friendly Mode

Possible settings:

* Larger font
* Increased spacing
* Reduced visual density
* Alternative font option
* Shorter line lengths
* Stronger section separation

Status: Future candidate.

---

### ADHD-Friendly Mode

Possible settings:

* Focus mode
* Quick wins
* Reduced dashboard clutter
* One-next-action view
* Gentle overdue handling
* Less visually noisy task lists

Status: Future candidate.

---

### Low-Vision Mode

Possible settings:

* Larger text
* High contrast
* Strong focus indicators
* Larger buttons
* Reduced transparency
* Simplified layout

Status: Future candidate.

---

### Reduced Motion Mode

Possible settings:

* Disable animations
* Disable non-essential transitions
* Avoid moving dashboard elements
* Use static loading states where possible

Status: Future candidate.

---

## Plugin Ecosystem

### Plugin Marketplace

A future plugin marketplace could allow users to install community plugins.

Status: Long-term future candidate.

Reason deferred:

A plugin marketplace requires major security, review, trust, and compatibility systems.

---

### Plugin Templates

Provide starter templates for plugin development.

Possible templates:

* Dashboard card plugin
* API integration plugin
* Local-only plugin
* Settings-only plugin
* Notification plugin

Status: Future candidate.

---

### Plugin Permission Manager

Allow users to view and control plugin permissions.

Possible features:

* Show plugin access
* Disable permissions
* Revoke network access
* Clear plugin data
* Disable plugin
* View external services used

Status: Future candidate.

---

## Backup and Sync

### Manual Local Backup

Allow the user to export a local backup.

Status: Future candidate.

Likely important before heavy daily use.

---

### Encrypted Local Backup

Allow backups to be encrypted.

Status: Future candidate.

Reason deferred:

Requires a clear key management decision.

---

### User-Controlled Cloud Backup

Allow backup to a user-selected cloud folder.

Possible destinations:

* Google Drive folder
* Dropbox folder
* OneDrive folder
* Syncthing folder
* Local NAS folder

Status: Future candidate.

Privacy note:

Cloud backup must be opt-in.

---

### Cross-Device Sync

Allow HomeHub data to sync across devices.

Status: Long-term future candidate.

Reason deferred:

Sync adds major complexity around security, conflict resolution, and data consistency.

---

## Multi-Device Support

### Mobile Companion App

A lightweight mobile companion could support:

* View today’s dashboard
* Receive reminders
* Check tasks
* Add notes
* Get time-to-leave alerts

Status: Future candidate.

Reason deferred:

The first version targets Ubuntu desktop.

---

### Browser Access from Local Network

Allow dashboard access from another device on the same network.

Status: Future candidate.

Security note:

Must not be enabled by default. Requires authentication and clear network exposure warnings.

---

### Desktop Packaging for Windows and macOS

Future packaging may support:

* Windows
* macOS
* Linux distributions beyond Ubuntu

Status: Future candidate.

Reason deferred:

Initial target is Ubuntu.

---

## Wall-Display Mode

### Passive Household Display

A future display mode could show glanceable information on a monitor or wall-mounted screen.

Possible content:

* Time
* Weather
* Today’s events
* Next appointment
* Transit leave time
* Household reminders
* Quick notes

Status: Future candidate.

---

### Large Text Mode

Wall-display mode should use larger text and reduced interaction.

Status: Future candidate.

---

### Touch-Friendly Mode

A wall display or tablet mode may require larger touch targets.

Status: Future candidate.

---

## Advanced Privacy and Security

### Local Database Encryption

Encrypt local HomeHub data at rest.

Status: Future candidate.

Reason deferred:

Requires database selection and key management design.

---

### Sensitive Note Locking

Allow specific notes or categories to require additional unlock.

Status: Future candidate.

---

### Plugin Trust Levels

Classify plugins by trust level.

Possible levels:

* Core plugin
* Local-only plugin
* External API plugin
* Experimental plugin
* Third-party plugin

Status: Future candidate.

---

### Data Deletion Tools

Allow users to delete categories of local data.

Possible options:

* Clear cached calendar data
* Delete plugin data
* Delete all notes
* Delete saved locations
* Reset dashboard layout
* Full local reset

Status: Future candidate.

---

## Deferred or Rejected Ideas

This section should be used when an idea is intentionally rejected or deferred.

Current rejected ideas:

None.

---

## Feature Promotion Criteria

A future feature may move into active development when:

* It supports the core HomeHub purpose
* It solves a real user problem
* It does not create excessive complexity
* It fits the local-first model
* It can be built without weakening privacy or accessibility
* It has clear acceptance criteria
* It does not depend on unresolved architecture decisions

---

## Acceptance Criteria

This document is useful if it:

* Preserves future ideas without expanding current scope
* Separates current requirements from future possibilities
* Makes deferred features easy to revisit
* Helps avoid scope creep
* Supports long-term planning
* Gives future contributors and AI assistants clear boundaries

---

## Maintenance Notes

Update this document when:

* A future idea is added
* A feature is deferred from current scope
* A feature is promoted into active development
* A feature is rejected
* A future feature needs more detail
* Project priorities change

