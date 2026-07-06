# Database Schema

**Project:** HomeHub  
**Version:** 1.0  
**Status:** Approved  
**Last Updated:** 2026-07-06  
**Author:** Amber Boudreau

---

# Purpose

This document defines the planned local database structure for HomeHub.

HomeHub will use SQLite for Version 1.0 because it is lightweight, local, reliable, and does not require a separate database server.

---

# Database Goals

The database should:

- Store user settings locally.
- Cache external API data.
- Store widget layout preferences.
- Store plugin configuration.
- Support offline functionality.
- Avoid storing unnecessary sensitive data.

---

# Core Tables

## settings

Stores global application settings.

| Column | Type | Notes |
|---|---|---|
| id | INTEGER | Primary key |
| key | TEXT | Unique setting name |
| value | TEXT | Stored setting value |
| updated_at | TEXT | Last updated timestamp |

---

## plugins

Tracks installed plugins.

| Column | Type | Notes |
|---|---|---|
| id | INTEGER | Primary key |
| plugin_id | TEXT | Unique plugin identifier |
| name | TEXT | Display name |
| version | TEXT | Plugin version |
| enabled | INTEGER | 1 = enabled, 0 = disabled |
| installed_at | TEXT | Installation date |
| updated_at | TEXT | Last updated timestamp |

---

## plugin_settings

Stores settings for individual plugins.

| Column | Type | Notes |
|---|---|---|
| id | INTEGER | Primary key |
| plugin_id | TEXT | Related plugin |
| key | TEXT | Setting name |
| value | TEXT | Setting value |
| updated_at | TEXT | Last updated timestamp |

---

## widgets

Stores widget definitions and layout positions.

| Column | Type | Notes |
|---|---|---|
| id | INTEGER | Primary key |
| widget_id | TEXT | Unique widget identifier |
| plugin_id | TEXT | Owning plugin |
| title | TEXT | Display title |
| enabled | INTEGER | 1 = visible, 0 = hidden |
| position_x | INTEGER | Dashboard column |
| position_y | INTEGER | Dashboard row |
| width | INTEGER | Widget width |
| height | INTEGER | Widget height |
| updated_at | TEXT | Last updated timestamp |

---

## calendar_events_cache

Caches calendar events for offline display.

| Column | Type | Notes |
|---|---|---|
| id | INTEGER | Primary key |
| external_id | TEXT | Calendar provider event ID |
| calendar_id | TEXT | Source calendar |
| title | TEXT | Event title |
| description | TEXT | Event notes |
| location | TEXT | Event location |
| start_time | TEXT | Start timestamp |
| end_time | TEXT | End timestamp |
| is_recurring | INTEGER | 1 = recurring |
| updated_at | TEXT | Last synced timestamp |

---

## weather_cache

Caches weather data.

| Column | Type | Notes |
|---|---|---|
| id | INTEGER | Primary key |
| location | TEXT | Weather location |
| data | TEXT | JSON weather response |
| fetched_at | TEXT | Fetch timestamp |
| expires_at | TEXT | Cache expiry timestamp |

---

## transit_cache

Caches route and travel-time data.

| Column | Type | Notes |
|---|---|---|
| id | INTEGER | Primary key |
| origin | TEXT | Starting location |
| destination | TEXT | Destination |
| route_data | TEXT | JSON route response |
| fetched_at | TEXT | Fetch timestamp |
| expires_at | TEXT | Cache expiry timestamp |

---

## notifications

Stores notification history.

| Column | Type | Notes |
|---|---|---|
| id | INTEGER | Primary key |
| plugin_id | TEXT | Source plugin |
| title | TEXT | Notification title |
| message | TEXT | Notification message |
| sent_at | TEXT | Time sent |
| dismissed | INTEGER | 1 = dismissed |

---

## appointment_notes

Stores local notes connected to appointments.

| Column | Type | Notes |
|---|---|---|
| id | INTEGER | Primary key |
| event_external_id | TEXT | Related calendar event |
| note | TEXT | User note |
| checklist_json | TEXT | Optional checklist |
| updated_at | TEXT | Last updated timestamp |

---

# Sensitive Data

Sensitive data should be minimized.

OAuth tokens should not be stored in plain text.

Token storage may use:

- OS keyring
- encrypted local file
- encrypted database field

---

# Data Retention

Cached external data should expire.

Examples:

- Weather cache: short expiry
- Transit cache: short expiry
- Calendar cache: medium expiry
- Notification history: user configurable

---

# Migration Strategy

Database schema changes should be handled through migrations.

Each migration should:

- Be versioned.
- Be reversible where practical.
- Preserve existing user data.
- Be documented.

---

# Future Tables

Future versions may add:

- gmail_cache
- drive_documents
- tasks
- user_profiles
- plugin_permissions
- sync_history
- audit_log

---

# Revision History

| Version | Date | Description |
|---|---|---|
| 1.0 | 2026-07-06 | Initial Database Schema |