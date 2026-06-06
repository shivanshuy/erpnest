import { contactInfo } from '../../shared/data'
import { Card, LocationIcon, MailIcon, PhoneIcon } from '../../ui'

type ContactInfoProps = {
  className?: string
}

export function ContactInfoPanel({ className }: ContactInfoProps) {
  const items = [
    {
      title: 'Phone',
      icon: <PhoneIcon className="text-primary-400" />,
      iconBox: 'bg-primary-500/10',
      content: (
        <div className="space-y-1">
          <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="block text-gray-400 hover:text-primary-400 transition-colors">
            {contactInfo.phone}
          </a>
          <a href={`tel:${contactInfo.phone2.replace(/\s/g, '')}`} className="block text-gray-400 hover:text-primary-400 transition-colors">
            {contactInfo.phone2}
          </a>
        </div>
      ),
    },
    {
      title: 'Email',
      icon: <MailIcon className="text-accent-400" />,
      iconBox: 'bg-accent-500/10',
      content: (
        <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-primary-400 transition-colors">
          {contactInfo.email}
        </a>
      ),
    },
    {
      title: 'Global Coverage',
      icon: <LocationIcon className="text-green-400" />,
      iconBox: 'bg-green-500/10',
      content: <p className="text-gray-400 text-sm">{contactInfo.globalCoverage}</p>,
    },
  ]

  return (
    <div className={className}>
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h3>
        <p className="text-gray-400 text-lg">
          We provide global coverage and are ready to support your SAP Basis needs wherever you are.
        </p>
      </div>

      <div className="space-y-6">
        {items.map((item) => (
          <Card key={item.title} compact>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg ${item.iconBox} flex items-center justify-center`}>
                {item.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                {item.content}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
