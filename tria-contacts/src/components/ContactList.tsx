import React from 'react'
import { Contact } from '../types'
import ContactCard from './ContactCard'

export default function ContactList({ contacts }: { contacts: Contact[] }) {
  if (!contacts.length) return <div className="empty">No contacts found.</div>
  return (
    <div className="list">
      {contacts.map(c => (
        <ContactCard key={c.id} contact={c} />
      ))}
    </div>
  )
}
