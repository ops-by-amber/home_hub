import type { DashboardSection } from '../types'
import { DashboardCard } from './DashboardCard'

type DashboardSectionCardProps = {
  section: DashboardSection
}

export function DashboardSectionCard({ section }: DashboardSectionCardProps) {
  return (
    <DashboardCard title={section.title} subtitle={section.subtitle}>
      <ul className="card-list">
        {section.items.map((item) => (
          <li key={`${section.id}-${item.text}`}>
            <span>{item.text}</span>
            {item.meta ? <span className="card-meta">{item.meta}</span> : null}
          </li>
        ))}
      </ul>
    </DashboardCard>
  )
}