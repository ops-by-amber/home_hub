Yes. Replace the contents of:

```text
docs/UI_Guidelines.md
```

with this full document:

````markdown
# HomeHub UI Guidelines

## Purpose

This document defines the user interface standards for HomeHub.

HomeHub should feel calm, clear, predictable, and practical. The interface should prioritize readability, accessibility, low cognitive load, and fast access to important household information.

The UI should not feel like a generic productivity app. It should feel like a personal home dashboard designed for real daily use.

---

## Design Goals

HomeHub’s interface must support the following goals:

- Show important information at a glance.
- Reduce the number of decisions required from the user.
- Make daily tasks, appointments, reminders, and notes easy to see.
- Support keyboard, mouse, touch, and screen-reader use.
- Avoid visual clutter.
- Allow plugins to add features without breaking the overall layout.
- Work well on a desktop monitor, laptop screen, and future tablet-style display.

---

## Core UI Principles

### 1. Clarity First

Every screen should make the next useful action obvious.

Avoid:

- Hidden controls
- Overloaded menus
- Dense walls of text
- Unclear icons without labels
- Multiple competing visual priorities

Prefer:

- Clear headings
- Plain language
- Consistent layout
- Visible actions
- Strong information hierarchy

---

### 2. Dashboard Before App

HomeHub is primarily a dashboard, not a traditional application.

The main screen should answer:

- What is happening today?
- What needs attention?
- What is coming next?
- What can wait?
- What information do I need without opening another app?

The user should not need to click through multiple pages to understand their day.

---

### 3. Low Cognitive Load

The UI should reduce mental effort.

Use:

- Grouped information
- Short labels
- Predictable placement
- Progressive disclosure
- Consistent components
- Sensible defaults

Avoid requiring the user to remember where features are located.

---

### 4. Accessibility First

Accessibility is a core requirement, not a later enhancement.

HomeHub must be usable by people with:

- ADHD
- Dyslexia
- Low vision
- Motor limitations
- Screen-reader use
- Cognitive fatigue
- Executive dysfunction

Accessibility standards should influence layout, spacing, copy, colour, keyboard support, and interaction design from the beginning.

---

### 5. Plugin Consistency

Plugins may add functionality, but they must not create inconsistent interfaces.

Every plugin should follow HomeHub’s shared UI standards for:

- Cards
- Headings
- Buttons
- Forms
- Alerts
- Empty states
- Error states
- Settings
- Navigation

Plugins should feel like part of the same system.

---

## Layout Structure

The HomeHub interface should use a modular dashboard layout.

### Recommended Primary Layout

```text
+--------------------------------------------------+
| Header / Status Bar                              |
+----------------------+---------------------------+
| Primary Dashboard    | Secondary Panel           |
|                      |                           |
| Today                | Upcoming                  |
| Tasks                | Weather                   |
| Calendar             | Transit                   |
| Notes                | Plugin Widgets            |
|                      |                           |
+----------------------+---------------------------+
| Optional Footer / System Status                  |
+--------------------------------------------------+
````

---

## Main Dashboard Areas

### Header / Status Bar

The header should show high-value, low-interaction information.

Recommended content:

* Current time
* Current date
* Weather summary
* Connection/sync status
* Quick access to settings
* Optional search or command input

The header should not become crowded.

---

### Today Area

The Today area is the primary focus of the dashboard.

It should show:

* Today’s appointments
* Time-sensitive tasks
* Important reminders
* Notes attached to today’s events
* Warnings or conflicts
* Suggested leave times when transit integration exists

The Today area should be visually prominent.

---

### Upcoming Area

The Upcoming area should show what is coming next without overwhelming the user.

Recommended scope:

* Next few calendar events
* Tomorrow’s key items
* Upcoming deadlines
* Recurring appointment notes
* Transit-relevant appointments

Avoid showing too far into the future by default.

---

### Task Area

Tasks should be grouped by usefulness, not only by category.

Recommended groupings:

* Due now
* Due today
* Quick wins
* Waiting
* Later
* Recurring

Tasks should show only the most important metadata by default.

Recommended visible fields:

* Task name
* Due state
* Estimated time
* Priority indicator
* Completion checkbox

Detailed notes should be expandable.

---

### Notes Area

Notes should be easy to attach to:

* Calendar events
* Recurring appointments
* Tasks
* Plugins
* Household items

Recurring appointments must support unique notes per occurrence.

Example:

A weekly counselling appointment may repeat every Wednesday, but each week may need different notes, questions, or follow-up items.

---

## Card System

HomeHub should use cards as the primary visual unit.

Cards should be used for:

* Calendar events
* Task groups
* Weather summaries
* Transit alerts
* Notes
* Plugin widgets
* System alerts

### Card Requirements

Each card should have:

* Clear title
* Optional subtitle
* Main content area
* Optional action area
* Consistent spacing
* Accessible heading structure

### Card Example

```text
+----------------------------------+
| Appointment                      |
| Counselling - 3:00 PM            |
|                                  |
| Notes: Bring updated school form |
|                                  |
| [Open] [Add note]                |
+----------------------------------+
```

---

## Navigation

Navigation should be simple and stable.

Recommended primary sections:

* Dashboard
* Calendar
* Tasks
* Notes
* Plugins
* Settings

The Dashboard should always be one action away.

Avoid deep navigation trees unless necessary.

---

## Interaction Standards

### Buttons

Buttons should use clear verbs.

Good examples:

* Add note
* Mark done
* Open calendar
* Refresh weather
* Edit plugin
* Save changes

Avoid vague labels:

* Submit
* Confirm
* Proceed
* Click here

---

### Forms

Forms should be short and broken into logical sections.

Form fields should have:

* Visible labels
* Helpful placeholder text only when useful
* Clear validation messages
* Keyboard navigation
* Screen-reader-compatible descriptions

Required fields should be clearly identified.

---

### Alerts

Alerts should be used sparingly.

Alert levels:

* Info
* Success
* Warning
* Error
* Critical

Critical alerts should be reserved for issues that require immediate user attention.

Examples:

* Calendar sync failed.
* Transit route unavailable.
* Plugin crashed.
* Local database backup failed.

---

### Empty States

Empty states should be useful.

Bad:

```text
No data.
```

Better:

```text
No tasks are due today.
```

Best:

```text
No tasks are due today. Quick wins are still available if you want a small reset.
```

---

### Error States

Error messages should explain:

* What happened
* Whether data is safe
* What the user can do next

Example:

```text
Weather could not be updated.

Your saved dashboard data is still available. Check your internet connection or try refreshing later.
```

---

## Accessibility Requirements

### Keyboard Support

All core features must be usable with a keyboard.

Required:

* Logical tab order
* Visible focus indicator
* Keyboard-accessible menus
* Keyboard-accessible modals
* Escape closes modals where appropriate
* Enter/Space activates buttons and checkboxes

---

### Screen Reader Support

The UI must use semantic structure.

Required:

* Proper heading order
* Meaningful button labels
* ARIA only when native HTML is insufficient
* Form labels connected to inputs
* Status messages announced when appropriate
* No information conveyed by colour alone

---

### Colour and Contrast

Colour should support meaning but not carry meaning by itself.

Requirements:

* Text must meet accessible contrast standards.
* Status indicators must include text or icons.
* Red/green-only distinctions should be avoided.
* Dark mode should be supported.
* High-contrast mode should be possible in the future.

---

### Dyslexia-Friendly Design

The interface should support readability.

Recommended:

* Short paragraphs
* Clear headings
* Generous spacing
* Avoid all-caps text for long labels
* Avoid dense justified text
* Use plain language
* Keep line lengths reasonable

---

### ADHD-Friendly Design

The interface should support focus and task initiation.

Recommended:

* Clear next action
* Quick wins
* Minimal visual noise
* Limited number of urgent items
* Collapsible sections
* Persistent Today view
* Optional focus mode
* Avoid unnecessary animations

---

## Visual Style

HomeHub should use a calm, functional visual style.

### Preferred Style

* Clean
* Practical
* Calm
* Warm but not decorative
* High contrast
* Low clutter
* Desktop-friendly

### Avoid

* Excessive animation
* Trend-based design choices
* Low-contrast grey text
* Tiny click targets
* Overuse of icons
* Crowded dashboards
* Decorative elements that reduce readability

---

## Typography

Typography should prioritize legibility.

Recommended:

* Use system fonts by default.
* Maintain clear heading hierarchy.
* Use larger font sizes for dashboard-critical information.
* Avoid very thin font weights.
* Allow future user-controlled font scaling.

Suggested hierarchy:

```text
Page title:        28-32px
Section heading:   20-24px
Card title:        16-20px
Body text:         14-16px
Secondary text:    13-14px
```

Exact sizes may change based on frontend framework and design system.

---

## Spacing

Spacing should make the dashboard easy to scan.

Recommended:

* Consistent spacing scale
* Clear separation between cards
* Comfortable padding inside cards
* Avoid cramped dense layouts
* Allow responsive rearrangement on smaller screens

Suggested spacing scale:

```text
4px
8px
12px
16px
24px
32px
48px
```

---

## Icon Use

Icons may be used, but they should not replace text where clarity matters.

Requirements:

* Icons with actions must have accessible labels.
* Icons should be consistent in style.
* Icons should not be the only way to understand a feature.
* Avoid decorative icons unless they improve scanning.

---

## Motion and Animation

Motion should be minimal.

Allowed:

* Subtle transitions
* Loading indicators
* Expand/collapse movement
* Non-distracting status updates

Avoid:

* Autoplay animation
* Flashing elements
* Constant motion
* Attention-grabbing effects
* Animation required to understand the UI

Users should eventually be able to reduce or disable motion.

---

## Responsive Behaviour

HomeHub should support multiple screen sizes.

### Desktop

Desktop is the primary target for initial development.

Desktop layout may use:

* Multi-column dashboard
* Persistent side navigation
* Larger cards
* More visible widgets

---

### Laptop / Small Screen

Small screens should gracefully reduce to:

* Fewer columns
* Collapsible panels
* Stacked cards
* Simplified navigation

---

### Future Tablet / Wall Display

A future wall-display mode may use:

* Large text
* Touch-friendly targets
* Passive glanceable display
* Reduced controls
* Larger calendar, weather, and task cards

---

## Plugin UI Standards

Plugins must follow HomeHub UI conventions.

Each plugin should define:

* Display name
* Short description
* Dashboard card layout
* Settings screen, if needed
* Empty state
* Error state
* Required permissions
* Data refresh behaviour

Plugins should not:

* Override global navigation
* Change global theme
* Use inaccessible controls
* Store UI state in undocumented ways
* Depend on external services without disclosure

---

## Theming

HomeHub should support theming without making theme design a core early blocker.

Initial theme requirements:

* Default dark mode
* Light mode support planned
* Consistent colour tokens
* Accessible contrast
* No hard-coded plugin-specific colours unless approved

Future theme options may include:

* High contrast
* Dyslexia-friendly font mode
* Large text mode
* Reduced motion mode
* Wall display mode

---

## Dashboard Customization

Users should eventually be able to choose:

* Which widgets are visible
* Widget order
* Widget size
* Default dashboard view
* Whether completed tasks remain visible
* Whether low-priority items are hidden
* Which plugins appear on the dashboard

Customization should not be required for the default dashboard to be useful.

---

## Notes for Implementation

During implementation, UI code should be organized around reusable components.

Likely shared components:

* AppShell
* HeaderBar
* Sidebar
* DashboardGrid
* Card
* Button
* Checkbox
* StatusBadge
* Alert
* Modal
* FormField
* EmptyState
* ErrorState
* PluginCard
* EventCard
* TaskCard
* NoteCard

Component names may change once the frontend framework is selected.

---

## Acceptance Criteria

This document is satisfied when HomeHub has a UI direction that supports:

* A clear dashboard-first experience
* Accessible interaction patterns
* Consistent plugin presentation
* Calm visual design
* Low cognitive load
* Keyboard and screen-reader usability
* Future responsive layouts
* Future theming and customization

---

## Future Decisions

The following decisions remain open:

* Final frontend framework
* Final component library, if any
* Whether to use a custom design system
* Whether to support a dedicated wall-display mode in version 1
* Whether plugin cards can define custom layouts
* How much dashboard customization should be available in the first release