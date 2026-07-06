# HomeHub Backend

## Purpose

This folder contains the local backend API for HomeHub.

The backend is responsible for:

- Local API endpoints
- Local database access
- Plugin coordination
- External integration adapters
- Backend business logic
- Future credential handling boundaries

HomeHub is local-first. The backend should run locally and should not depend on cloud infrastructure for core functionality.

---

## Initial Stack

The backend uses:

- Python
- FastAPI
- SQLite, planned
- Uvicorn for local development

---

## Development Setup

From the repository root:

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
uvicorn app.main:app --reload