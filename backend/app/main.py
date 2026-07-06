from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


class HealthResponse(BaseModel):
    status: str
    service: str
    version: str


class DashboardItem(BaseModel):
    text: str
    meta: str | None = None


class DashboardSection(BaseModel):
    id: str
    title: str
    subtitle: str
    items: list[DashboardItem]


class TodayDashboardResponse(BaseModel):
    status: str
    sections: list[DashboardSection]


app = FastAPI(
    title="HomeHub API",
    description="Local backend API for the HomeHub personal dashboard.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root() -> dict[str, str]:
    return {
        "message": "HomeHub backend is running.",
    }


@app.get("/health", response_model=HealthResponse)
def health_check() -> HealthResponse:
    return HealthResponse(
        status="ok",
        service="homehub-backend",
        version="0.1.0",
    )


@app.get("/api/dashboard/today", response_model=TodayDashboardResponse)
def get_today_dashboard() -> TodayDashboardResponse:
    return TodayDashboardResponse(
        status="ok",
        sections=[
            DashboardSection(
                id="today",
                title="Today",
                subtitle="Current day overview",
                items=[
                    DashboardItem(text="No calendar events loaded yet."),
                    DashboardItem(text="No urgent reminders loaded yet."),
                    DashboardItem(text="Backend dashboard endpoint is connected."),
                ],
            ),
            DashboardSection(
                id="calendar",
                title="Calendar",
                subtitle="Upcoming appointments",
                items=[
                    DashboardItem(
                        text="Calendar integration will be added later.",
                        meta="Planned plugin",
                    ),
                ],
            ),
            DashboardSection(
                id="tasks",
                title="Tasks",
                subtitle="Due and useful next actions",
                items=[
                    DashboardItem(
                        text="Task storage will be added after the local database layer exists.",
                        meta="Local storage pending",
                    ),
                ],
            ),
            DashboardSection(
                id="notes",
                title="Notes",
                subtitle="Event and household notes",
                items=[
                    DashboardItem(
                        text="Notes will support event-linked and recurring appointment notes.",
                        meta="Core feature",
                    ),
                ],
            ),
            DashboardSection(
                id="weather",
                title="Weather",
                subtitle="Local forecast",
                items=[
                    DashboardItem(
                        text="Weather will start with mock data before live API integration.",
                        meta="Mock data first",
                    ),
                ],
            ),
            DashboardSection(
                id="transit",
                title="Transit",
                subtitle="Time-to-leave planning",
                items=[
                    DashboardItem(
                        text="Transit planning will depend on calendar locations and route data.",
                        meta="Future integration",
                    ),
                ],
            ),
        ],
    )