import type { HealthResponse, TodayDashboardResponse } from '../types'

const API_BASE_URL = 'http://127.0.0.1:8000'

export async function fetchBackendHealth(): Promise<HealthResponse> {
  const response = await fetch(`${API_BASE_URL}/health`)

  if (!response.ok) {
    throw new Error(`Backend returned ${response.status}`)
  }

  return (await response.json()) as HealthResponse
}

export async function fetchTodayDashboard(): Promise<TodayDashboardResponse> {
  const response = await fetch(`${API_BASE_URL}/api/dashboard/today`)

  if (!response.ok) {
    throw new Error(`Dashboard endpoint returned ${response.status}`)
  }

  return (await response.json()) as TodayDashboardResponse
}