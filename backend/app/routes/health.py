from fastapi import APIRouter

from app.database import check_database_health
from app.schemas import DatabaseHealthResponse, HealthResponse

router = APIRouter(tags=["system"])


@router.get("/")
def read_root() -> dict[str, str]:
    return {
        "message": "HomeHub backend is running.",
    }


@router.get("/health", response_model=HealthResponse)
def health_check() -> HealthResponse:
    return HealthResponse(
        status="ok",
        service="homehub-backend",
        version="0.1.0",
    )


@router.get("/health/database", response_model=DatabaseHealthResponse)
def database_health_check() -> DatabaseHealthResponse:
    return DatabaseHealthResponse(**check_database_health())