from fastapi import APIRouter

from app.schemas import HealthResponse

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