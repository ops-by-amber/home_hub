# HomeHub MVP

## Purpose

This document defines the first useful version of HomeHub.

HomeHub should not begin as a generic dashboard. The MVP should prove that HomeHub can solve a real daily-life logistics problem:

```text
Help the user plan appointments, prepare for events, manage travel steps, create follow-up tasks, and draft rescheduling messages from one local-first dashboard.
```

The MVP should stay small enough to build, test, and improve without getting buried in future features.

---

## Core Product Definition

HomeHub is a local-first scheduling and life logistics assistant.

It helps the user answer questions like:

```text
I have a meeting at 1:30, but I need to stop at Tyler’s beforehand. Help me plan when to leave.
```

```text
I need to reschedule tomorrow’s appointment. Draft a message asking for a new date and apologize for the inconvenience.
```

```text
What do I need to do before my appointment today?
```

```text
What appointments do I have coming up, and what notes or tasks are attached to them?
```

---

## MVP Goal

The MVP should prove that HomeHub can:

- Store appointments locally.
- Store appointment-specific notes.
- Store tasks linked to appointments.
- Show today’s schedule.
- Show upcoming appointment preparation.
- Help draft rescheduling messages.
- Support basic route-planning preparation.
- Keep private planning data local.
- Provide an accessibility-first dashboard.

---

## MVP User Problem

The user may have appointments, errands, notes, tasks, and messages spread across different apps or in their head.

This creates problems:

- Forgetting preparation steps.
- Forgetting what needs to be brought to an appointment.
- Missing travel-time issues.
- Forgetting to stop somewhere before an appointment.
- Struggling to draft rescheduling messages.
- Losing notes attached to recurring appointments.
- Having to coordinate calendar, notes, maps, transit, email, and reminders manually.

HomeHub should reduce that coordination burden.

---

## Primary MVP Use Case

### Appointment Preparation

The user opens HomeHub and sees:

- Today’s appointments.
- Upcoming appointments.
- Notes attached to each appointment.
- Tasks linked to each appointment.
- Prep checklist.
- Route-planning prompt.
- Reschedule message option.

Example:

```text
Counselling appointment
Tomorrow at 2:00 PM

Notes:
- Ask about school transition.
- Bring updated form.

Tasks:
- Print form.
- Confirm bus time.
- Leave by 1:10 PM.
```

---

## Secondary MVP Use Case

### Rescheduling Assistant

The user can select an appointment and ask HomeHub to help draft a rescheduling message.

Example user request:

```text
I need to reschedule this appointment. Ask if they have anything next week and apologize for the inconvenience.
```

HomeHub should generate a draft like:

```text
Hi [Name],

I’m sorry for the inconvenience, but I need to reschedule our appointment currently set for [date/time].

Would you happen to have any availability next week?

Thank you,
[User]
```

The MVP should draft the message only. It should not send automatically.

---

## Third MVP Use Case

### Route and Errand Planning

The user can enter a planning request such as:

```text
I have court at 1:30 but need to stop at Tyler’s first.
```

HomeHub should help organize the plan.

Early MVP response may include:

- Appointment time.
- Stop before appointment.
- Planning checklist.
- Reminder to check transit.
- Suggested buffer.
- Placeholder leave-time calculation.

Later versions may calculate actual transit routes.

---

## MVP Scope

The MVP includes:

- Manual appointment entry.
- Manual appointment location entry.
- Appointment notes.
- Appointment-linked tasks.
- Today dashboard.
- Upcoming appointments view.
- Basic reschedule draft generator.
- Basic route-prep planning assistant.
- Local SQLite storage.
- Accessible card-based interface.
- Backend API endpoints for appointment data.
- Frontend dashboard cards using backend data.

---

## MVP Non-Scope

The MVP does not include:

- Live Google Calendar sync.
- Live transit API integration.
- Live maps integration.
- Automatic SMS sending.
- Automatic email sending.
- AI API integration.
- Grocery assistant.
- Pantry/fridge photo recognition.
- Receipt parsing.
- Smart-home automation.
- Plugin marketplace.
- Multi-user households.
- Cloud sync.
- Mobile app.
- Desktop wrapper.
- Advanced notifications.

These may be considered later.

---

## AI Assistant Scope

The MVP may use simple rule-based assistant behaviour before real AI is added.

Early assistant features can be built locally using templates and structured inputs.

Examples:

- Reschedule message templates.
- Appointment prep checklist templates.
- Route planning checklist templates.
- Follow-up reminder suggestions.

Real AI should be treated as a future enhancement unless it can be added without cost, privacy risk, or architectural disruption.

---

## Scheduling Assistant Direction

The scheduling assistant should eventually support natural-language requests.

Target examples:

```text
I have a meeting at 1:30 but need to stop at Tyler’s first. Help me plan the route.
```

```text
I need to reschedule tomorrow’s meeting. Draft an email asking for a new date and apologize.
```

```text
I have an appointment Friday morning. Remind me to bring the paperwork and check transit the night before.
```

```text
What do I need to do before my appointment tomorrow?
```

The first version does not need full natural-language AI. It can begin with structured forms and templates.

---

## Data Needed For MVP

The MVP requires the following local data types:

### Appointment

Fields:

- id
- title
- date
- start_time
- end_time
- location_name
- location_address
- description
- created_at
- updated_at

---

### Appointment Note

Fields:

- id
- appointment_id
- note_text
- created_at
- updated_at

---

### Appointment Task

Fields:

- id
- appointment_id
- task_text
- status
- due_at
- created_at
- updated_at

---

### Saved Place

Fields:

- id
- name
- address
- notes
- created_at
- updated_at

Examples:

- Home
- Tyler’s
- School
- Courthouse
- Counsellor
- Doctor
- Grocery store

---

### Message Draft

Fields:

- id
- appointment_id
- draft_type
- recipient_name
- recipient_contact
- subject
- body
- status
- created_at
- updated_at

Draft types may include:

- reschedule_email
- reschedule_text
- follow_up_email
- confirmation_message

---

## Dashboard Cards For MVP

The dashboard should initially include:

### Today Card

Shows:

- Today’s appointments.
- Time.
- Location.
- Linked tasks.
- Important notes.

---

### Upcoming Card

Shows:

- Next few appointments.
- Tomorrow’s appointments.
- Upcoming preparation items.

---

### Appointment Prep Card

Shows selected appointment details:

- Time.
- Location.
- Notes.
- Tasks.
- Prep checklist.
- Reschedule action.
- Route planning action.

---

### Assistant Card

Allows the user to enter a planning request.

Example placeholder:

```text
What do you need help planning?
```

Possible inputs:

- reschedule this meeting
- plan my route
- add a stop before this appointment
- help me prepare for this appointment
- draft a follow-up message

---

### System Card

Shows local system status:

- Backend status.
- Database status.
- Local-first status.

---

## Accessibility Requirements

The MVP must remain:

- Keyboard usable.
- Screen-reader friendly.
- Clear and low clutter.
- Dyslexia-friendly.
- ADHD-friendly.
- Plain-language.
- Usable without relying on colour alone.

Dashboard cards should have:

- Clear headings.
- Short sections.
- Obvious actions.
- Consistent layout.
- Visible focus states.

---

## Privacy Requirements

The MVP may contain sensitive information.

Examples:

- Appointment details.
- Legal appointments.
- Medical appointments.
- School appointments.
- Household notes.
- Addresses.
- Rescheduling messages.

Rules:

- Store MVP data locally in SQLite.
- Do not send data to external services by default.
- Do not use cloud AI by default.
- Do not log sensitive appointment notes.
- Do not auto-send messages.
- Do not expose local server to the network by default.

---

## Free Development Constraint

The MVP must be buildable with free tools.

Allowed:

- Ubuntu
- VS Code
- Git
- GitHub
- Python
- FastAPI
- SQLite
- React
- Vite
- TypeScript

Not required for MVP:

- Paid AI APIs.
- Paid hosting.
- Paid transit APIs.
- Paid map APIs.
- Paid email services.
- Paid SMS services.

---

## MVP Build Order

Recommended build order:

1. Create appointment database tables.
2. Add backend appointment models and routes.
3. Add frontend appointment types.
4. Add appointment list card.
5. Add manual appointment creation form.
6. Add appointment notes.
7. Add appointment-linked tasks.
8. Add basic appointment prep view.
9. Add reschedule draft generator.
10. Add route-prep planning template.
11. Add saved places.
12. Add assistant input card.
13. Refine accessibility and layout.
14. Update documentation and project state.

---

## First Implementation Step

The next coding task should be:

```text
Create SQLite tables for appointments, appointment notes, appointment tasks, saved places, and message drafts.
```

This should build directly on the current SQLite database foundation.

---

## Acceptance Criteria

The MVP is successful when the user can:

- Add an appointment manually.
- Add notes to that appointment.
- Add tasks linked to that appointment.
- View the appointment on the Today dashboard.
- View upcoming appointments.
- Generate a rescheduling message draft.
- Create a basic planning note for appointment travel or errands.
- Use the app locally without paid services.
- Restart the app without losing saved data.

---

## Future Features

Future features should remain outside MVP unless promoted later.

Examples:

- Live calendar sync.
- Live transit route calculation.
- Real AI scheduling assistant.
- Email sending.
- Text sending.
- Grocery list card.
- Pantry/fridge photo review.
- Receipt-based grocery prediction.
- Weather-aware travel planning.
- Mobile companion app.
- Desktop wrapper.
- Cloud backup.

---

## Decision Summary

HomeHub’s MVP is not a generic productivity dashboard.

The MVP is a local-first appointment planning and scheduling assistant that helps manage appointments, notes, prep tasks, route planning, and rescheduling drafts.

This gives HomeHub a clearer purpose and a stronger reason to exist.