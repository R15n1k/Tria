import React from 'react'
import { Contact } from '../types'

export default function ContactCard({ contact }: { contact: Contact }) {
  return (
    <div className="card">
      <div className="card-main">
        <div className="name">{contact.name}</div>
        <div className="meta">{contact.email || '—'} · {contact.phone || '—'}</div>
      </div>
    </div>
  )
}
