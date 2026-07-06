import type { ReactNode } from 'react'
import './App.css'

type DashboardCardProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

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