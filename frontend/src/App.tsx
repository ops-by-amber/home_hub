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

type BackendStatus =
  | { state: 'loading' }
  | { state: 'online'; data: HealthResponse }
  | { state: 'offline'; error: string }

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

    void checkBackendHealth()
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
        <DashboardCard title="Today" subtitle="Current day overview">
          <ul>
            <li>No calendar events loaded yet.</li>
            <li>No urgent reminders loaded yet.</li>
            <li>Backend scaffold is ready.</li>
          </ul>
        </DashboardCard>

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

        <DashboardCard title="Calendar" subtitle="Upcoming appointments">
          <p>Calendar integration will be added later.</p>
        </DashboardCard>

        <DashboardCard title="Tasks" subtitle="Due and useful next actions">
          <p>Task storage will be added after the local database layer exists.</p>
        </DashboardCard>

        <DashboardCard title="Notes" subtitle="Event and household notes">
          <p>Notes will support event-linked and recurring appointment notes.</p>
        </DashboardCard>

        <DashboardCard title="Weather" subtitle="Local forecast">
          <p>Weather will start with mock data before live API integration.</p>
        </DashboardCard>

        <DashboardCard title="Transit" subtitle="Time-to-leave planning">
          <p>Transit planning will depend on calendar locations and route data.</p>
        </DashboardCard>
      </section>
    </main>
  )
}

export default App