import type { BackendStatus } from '../types'
import { DashboardCard } from './DashboardCard'

type SystemCardProps = {
  backendStatus: BackendStatus
}

export function SystemCard({ backendStatus }: SystemCardProps) {
  return (
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
  )
}