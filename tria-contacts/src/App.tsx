import React, { useEffect, useMemo, useState } from 'react'
import { Contact } from './types'
import initialContacts from './data/contacts'
import ContactList from './components/ContactList'
import AddContact from './components/AddContact'

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>(() => {
    try {
      const raw = localStorage.getItem('contacts')
      if (raw) return JSON.parse(raw) as Contact[]
    } catch (e) {
    }
    return initialContacts
  })
  const [query, setQuery] = useState('')

  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    } catch (e) {}
  }, [contacts])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return contacts
    return contacts.filter(c => c.name.toLowerCase().includes(q))
  }, [contacts, query])

  function addContact(c: Contact) {
    setContacts(prev => [c, ...prev])
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Contact List</h1>
        <div className="search">
          <input
            placeholder="Search contacts by name..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </header>

      <main>
        <AddContact onAdd={addContact} />
        <ContactList contacts={filtered} />
      </main>

      <footer className="footer">
        <small>Contact List</small>
      </footer>
    </div>
  )
}
