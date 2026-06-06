import { type ChangeEvent, type FormEvent, useState } from 'react'
import { enquiryOptions, initialContactForm, requestOptions } from '../../shared/data'
import type { ContactFormState } from '../../shared/types'
import { Button, Card, Field, Input, Select, Textarea } from '../../ui'

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({ ...initialContactForm })

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Form submitted:', form)
    alert('Thank you for your message! We will get back to you soon.')
    setForm({ ...initialContactForm })
  }

  return (
    <Card bordered>
      <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
      <p className="text-gray-400 text-sm mb-8">
        Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Field id="name" label="Name *">
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </Field>

        <Field id="email" label="Email *">
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </Field>

        <div className="grid md:grid-cols-2 gap-6">
          <Field id="enquiryType" label="Enquiry Type">
            <Select id="enquiryType" name="enquiryType" value={form.enquiryType} onChange={handleChange}>
              {enquiryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </Field>

          <Field id="requestType" label="Request Type">
            <Select id="requestType" name="requestType" value={form.requestType} onChange={handleChange}>
              {requestOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </Field>
        </div>

        <Field id="message" label="Message *">
          <Textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Tell us about your requirements..."
          />
        </Field>

        <Button type="submit" variant="submit">
          Send Message
        </Button>
      </form>
    </Card>
  )
}
