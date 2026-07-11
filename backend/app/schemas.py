from pydantic import BaseModel


class HealthResponse(BaseModel):
    status: str
    service: str
    version: str


class DatabaseHealthResponse(BaseModel):
    status: str
    database: str
    schema_version: str
    path: str

    
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