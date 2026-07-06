from fastapi import APIRouter

from app.schemas import DashboardItem, DashboardSection, TodayDashboardResponse

router = APIRouter(
    prefix="/api/dashboard",
    tags=["dashboard"],
)


@router.get("/today", response_model=TodayDashboardResponse)
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