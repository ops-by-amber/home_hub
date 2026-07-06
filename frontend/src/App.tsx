import { useEffect, useState } from 'react'
import { fetchBackendHealth, fetchTodayDashboard } from './api/homehubApi'
import './App.css'
import { DashboardCard } from './components/DashboardCard'
import { DashboardSectionCard } from './components/DashboardSectionCard'
import { SystemCard } from './components/SystemCard'
import type { BackendStatus, DashboardStatus } from './types'

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
        const data = await fetchBackendHealth()

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
        const data = await fetchTodayDashboard()

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
        <SystemCard backendStatus={backendStatus} />

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
              <DashboardSectionCard key={section.id} section={section} />
            ))
          : null}
      </section>
    </main>
  )
}

export default App