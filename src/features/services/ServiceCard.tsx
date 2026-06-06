import type { Service } from '../../shared/types'
import { Card } from '../../ui'

type ServiceCardProps = {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div className="group animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
      <Card
        hover
        className="h-full cursor-pointer border-2 border-transparent hover:border-primary-500/50 transition-all"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-2xl" aria-hidden="true">
              {service.icon}
            </span>
          </div>
          <span className="px-3 py-1 rounded-full bg-dark-800 text-xs font-medium text-gray-300">
            {service.badge}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-gray-400">
              <span className="text-primary-400 mt-1">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
