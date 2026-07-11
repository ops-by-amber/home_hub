from pathlib import Path
import sqlite3


BACKEND_DIR = Path(__file__).resolve().parents[1]
DATA_DIR = BACKEND_DIR / "data"
DATABASE_PATH = DATA_DIR / "homehub.sqlite3"


def ensure_database() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    with sqlite3.connect(DATABASE_PATH) as connection:
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
            INSERT OR IGNORE INTO app_metadata (key, value)
            VALUES ('schema_version', '0')
            """
        )
        connection.commit()


def check_database_health() -> dict[str, str]:
    ensure_database()

    with sqlite3.connect(DATABASE_PATH) as connection:
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
        "schema_version": row[0] if row else "unknown",
        "path": str(DATABASE_PATH),
    }