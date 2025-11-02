import React, { useState } from 'react'
import { Contact } from '../types'

function createId() {
  try {
    const c = (globalThis as any).crypto
    if (c && typeof c.randomUUID === 'function') return c.randomUUID()
  } catch (e) {
  }
  return 'id-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8)
}

export default function AddContact({ onAdd }: { onAdd: (c: Contact) => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return
    const c: Contact = { id: createId(), name: name.trim(), email: email.trim() || undefined, phone: phone.trim() || undefined }
    onAdd(c)
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <form className="add" onSubmit={submit}>
      <input placeholder="Name (required)" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
      <button type="submit">Add Contact</button>
    </form>
  )
}
