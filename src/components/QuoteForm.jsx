import { useState } from 'react'
import { MessageCircle, Mail, CheckCircle2 } from 'lucide-react'
import { brand } from '../data/brand'

const empty = { name: '', email: '', phone: '', destination: '', date: '', guests: '2', budget: '', notes: '' }

export default function QuoteForm({ compact = false, preset = '' }) {
  const [f, setF] = useState({ ...empty, destination: preset })
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const message = () =>
    `Quote request\nName: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nDestination: ${f.destination}\nTravel date: ${f.date}\nGuests: ${f.guests}\nBudget: ${f.budget}\nNotes: ${f.notes}`

  const submit = (e) => {
    e.preventDefault()
    // No backend yet: opens WhatsApp with the details. Swap for an API call later.
    window.open(`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message())}`, '_blank')
    setSent(true)
  }
  const mail = () => {
    window.location.href = `mailto:${brand.email}?subject=Quote request&body=${encodeURIComponent(message())}`
  }

  if (sent)
    return (
      <div className="form-done">
        <CheckCircle2 size={44} />
        <h3>Thank you, {f.name || 'traveller'}!</h3>
        <p>Your request is ready in WhatsApp. One of our specialists will reply shortly.</p>
        <button className="btn btn--ghost" onClick={() => setSent(false)}>Send another</button>
      </div>
    )

  return (
    <form className={`form ${compact ? 'form--compact' : ''}`} onSubmit={submit}>
      <div className="form__grid">
        <label>Full name<input required value={f.name} onChange={set('name')} placeholder="Jane Doe" /></label>
        <label>Email<input required type="email" value={f.email} onChange={set('email')} placeholder="you@email.com" /></label>
        <label>Phone<input required value={f.phone} onChange={set('phone')} placeholder="+254…" /></label>
        <label>Destination<input required value={f.destination} onChange={set('destination')} placeholder="Maasai Mara, Zanzibar…" /></label>
        <label>Travel date<input type="date" value={f.date} onChange={set('date')} /></label>
        <label>Guests
          <select value={f.guests} onChange={set('guests')}>
            {[1, 2, 3, 4, 5, 6, '7+'].map((n) => <option key={n}>{n}</option>)}
          </select>
        </label>
        {!compact && (
          <label className="span2">Budget per person
            <select value={f.budget} onChange={set('budget')}>
              <option value="">Select…</option><option>Under $1,500</option><option>$1,500–$3,500</option>
              <option>$3,500–$7,000</option><option>$7,000+</option>
            </select>
          </label>
        )}
        <label className="span2">Tell us more<textarea rows={compact ? 3 : 4} value={f.notes} onChange={set('notes')} placeholder="Interests, special occasions, anything we should know…" /></label>
      </div>
      <div className="form__actions">
        <button className="btn btn--accent" type="submit"><MessageCircle size={18} /> Send via WhatsApp</button>
        <button className="btn btn--ghost" type="button" onClick={mail}><Mail size={18} /> Email instead</button>
      </div>
    </form>
  )
}
