import type { ReactNode } from 'react'

type DashboardCardProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

export function DashboardCard({ title, subtitle, children }: DashboardCardProps) {
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