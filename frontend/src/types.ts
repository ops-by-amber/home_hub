export type HealthResponse = {
  status: string
  service: string
  version: string
}

export type DashboardItem = {
  text: string
  meta?: string | null
}

export type DashboardSection = {
  id: string
  title: string
  subtitle: string
  items: DashboardItem[]
}

export type TodayDashboardResponse = {
  status: string
  sections: DashboardSection[]
}

export type BackendStatus =
  | { state: 'loading' }
  | { state: 'online'; data: HealthResponse }
  | { state: 'offline'; error: string }

export type DashboardStatus =
  | { state: 'loading' }
  | { state: 'ready'; data: TodayDashboardResponse }
  | { state: 'error'; error: string }