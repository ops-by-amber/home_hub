from pathlib import Path
import sqlite3


BACKEND_DIR = Path(__file__).resolve().parents[1]
DATA_DIR = BACKEND_DIR / "data"
DATABASE_PATH = DATA_DIR / "homehub.sqlite3"
SCHEMA_VERSION = "1"


def get_connection() -> sqlite3.Connection:
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    connection = sqlite3.connect(DATABASE_PATH)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON")

    return connection


def ensure_database() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    with get_connection() as connection:
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS app_metadata (
                key TEXT PRIMARY KEY,
                value TEXT NOT NULL
            )
            """
        )

        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS appointments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                appointment_date TEXT NOT NULL,
                start_time TEXT NOT NULL,
                end_time TEXT,
                location_name TEXT,
                location_address TEXT,
                description TEXT,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
            """
        )

        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS appointment_notes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                appointment_id INTEGER NOT NULL,
                note_text TEXT NOT NULL,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (appointment_id)
                    REFERENCES appointments (id)
                    ON DELETE CASCADE
            )
            """
        )

        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS appointment_tasks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                appointment_id INTEGER NOT NULL,
                task_text TEXT NOT NULL,
                status TEXT NOT NULL DEFAULT 'open',
                due_at TEXT,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (appointment_id)
                    REFERENCES appointments (id)
                    ON DELETE CASCADE
            )
            """
        )

        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS saved_places (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                address TEXT,
                notes TEXT,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
            """
        )

        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS message_drafts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                appointment_id INTEGER,
                draft_type TEXT NOT NULL,
                recipient_name TEXT,
                recipient_contact TEXT,
                subject TEXT,
                body TEXT NOT NULL,
                status TEXT NOT NULL DEFAULT 'draft',
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (appointment_id)
                    REFERENCES appointments (id)
                    ON DELETE SET NULL
            )
            """
        )

        connection.execute(
            """
            CREATE INDEX IF NOT EXISTS idx_appointments_date
            ON appointments (appointment_date)
            """
        )

        connection.execute(
            """
            CREATE INDEX IF NOT EXISTS idx_appointment_notes_appointment_id
            ON appointment_notes (appointment_id)
            """
        )

        connection.execute(
            """
            CREATE INDEX IF NOT EXISTS idx_appointment_tasks_appointment_id
            ON appointment_tasks (appointment_id)
            """
        )

        connection.execute(
            """
            CREATE INDEX IF NOT EXISTS idx_message_drafts_appointment_id
            ON message_drafts (appointment_id)
            """
        )

        connection.execute(
            """
            INSERT INTO app_metadata (key, value)
            VALUES ('schema_version', ?)
            ON CONFLICT(key) DO UPDATE SET value = excluded.value
            """,
            (SCHEMA_VERSION,),
        )

        connection.commit()


def check_database_health() -> dict[str, str]:
    ensure_database()

    with get_connection() as connection:
        cursor = connection.execute(
            """
            SELECT value
            FROM app_metadata
            WHERE key = 'schema_version'
            """
        )
        row = cursor.fetchone()

    return {
        "status": "ok",
        "database": "sqlite",
        "schema_version": row["value"] if row else "unknown",
        "path": str(DATABASE_PATH),
    }