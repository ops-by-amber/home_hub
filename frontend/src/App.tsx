import { useEffect, useState, type ReactNode } from 'react'
import './App.css'

type DashboardCardProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

type HealthResponse = {
  status: string
  service: string
  version: string
}

type DashboardItem = {
  text: string
  meta?: string | null
}

type DashboardSection = {
  id: string
  title: string
  subtitle: string
  items: DashboardItem[]
}

type TodayDashboardResponse = {
  status: string
  sections: DashboardSection[]
}

type BackendStatus =
  | { state: 'loading' }
  | { state: 'online'; data: HealthResponse }
  | { state: 'offline'; error: string }

type DashboardStatus =
  | { state: 'loading' }
  | { state: 'ready'; data: TodayDashboardResponse }
  | { state: 'error'; error: string }

const API_BASE_URL = 'http://127.0.0.1:8000'

function DashboardCard({ title, subtitle, children }: DashboardCardProps) {
  const headingId = `${title.toLowerCase().replaceAll(' ', '-')}-heading`

  return (
    <section className="dashboard-card" aria-labelledby={headingId}>
      <div className="card-header">
        <h2 id={headingId}>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      <div className="card-body">{children}</div>
    </section>
  )
}

function App() {
  const [backendStatus, setBackendStatus] = useState<BackendStatus>({
    state: 'loading',
  })

  const [dashboardStatus, setDashboardStatus] = useState<DashboardStatus>({
    state: 'loading',
  })

  useEffect(() => {
    async function checkBackendHealth() {
      try {
        const response = await fetch(`${API_BASE_URL}/health`)

        if (!response.ok) {
          throw new Error(`Backend returned ${response.status}`)
        }

        const data = (await response.json()) as HealthResponse

        setBackendStatus({
          state: 'online',
          data,
        })
      } catch (error) {
        setBackendStatus({
          state: 'offline',
          error:
            error instanceof Error
              ? error.message
              : 'Unknown backend connection error',
        })
      }
    }

    async function loadDashboard() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/dashboard/today`)

        if (!response.ok) {
          throw new Error(`Dashboard endpoint returned ${response.status}`)
        }

        const data = (await response.json()) as TodayDashboardResponse

        setDashboardStatus({
          state: 'ready',
          data,
        })
      } catch (error) {
        setDashboardStatus({
          state: 'error',
          error:
            error instanceof Error
              ? error.message
              : 'Unknown dashboard loading error',
        })
      }
    }

    void checkBackendHealth()
    void loadDashboard()
  }, [])

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">HomeHub</p>
          <h1>Today Dashboard</h1>
        </div>

        <div className="status-pill" aria-label="Prototype status">
          Local-first prototype
        </div>
      </header>

      <section className="dashboard-grid" aria-label="HomeHub dashboard">
        <DashboardCard title="System" subtitle="Local backend status">
          {backendStatus.state === 'loading' ? (
            <p className="status-loading">Checking backend connection...</p>
          ) : null}

          {backendStatus.state === 'online' ? (
            <dl className="backend-status-list">
              <div>
                <dt>Status</dt>
                <dd className="status-ok">{backendStatus.data.status}</dd>
              </div>
              <div>
                <dt>Service</dt>
                <dd>{backendStatus.data.service}</dd>
              </div>
              <div>
                <dt>Version</dt>
                <dd>{backendStatus.data.version}</dd>
              </div>
            </dl>
          ) : null}

          {backendStatus.state === 'offline' ? (
            <div>
              <p className="status-error">Backend offline</p>
              <p>{backendStatus.error}</p>
            </div>
          ) : null}
        </DashboardCard>

        {dashboardStatus.state === 'loading' ? (
          <DashboardCard title="Loading" subtitle="Dashboard data">
            <p className="status-loading">Loading dashboard cards...</p>
          </DashboardCard>
        ) : null}

        {dashboardStatus.state === 'error' ? (
          <DashboardCard title="Dashboard Error" subtitle="Data unavailable">
            <p className="status-error">{dashboardStatus.error}</p>
          </DashboardCard>
        ) : null}

        {dashboardStatus.state === 'ready'
          ? dashboardStatus.data.sections.map((section) => (
              <DashboardCard
                key={section.id}
                title={section.title}
                subtitle={section.subtitle}
              >
                <ul className="card-list">
                  {section.items.map((item) => (
                    <li key={`${section.id}-${item.text}`}>
                      <span>{item.text}</span>
                      {item.meta ? (
                        <span className="card-meta">{item.meta}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </DashboardCard>
            ))
          : null}
      </section>
    </main>
  )
}

export default App