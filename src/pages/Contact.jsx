import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { PageHero } from '../components/Bits'
import QuoteForm from '../components/QuoteForm'
import { media } from '../data/media'
import { brand } from '../data/brand'

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's plan your journey" text="Send us a message and a specialist will reply within a day." img={media.heroSafari} />
      <section className="section">
        <div className="container detail">
          <div className="panel"><h2 style={{ marginBottom: 20 }}>Send a message</h2><QuoteForm /></div>
          <aside>
            <div className="panel" style={{ display: 'grid', gap: 20 }}>
              <div><h4><Phone size={16} /> Call us</h4><p className="muted">{brand.phone}</p></div>
              <div><h4><Mail size={16} /> Email</h4><p className="muted">{brand.email}</p></div>
              <div><h4><Clock size={16} /> Hours</h4><p className="muted">{brand.hours}</p></div>
              {brand.offices.map((o) => <div key={o.city}><h4><MapPin size={16} /> {o.city}</h4><p className="muted">{o.address}<br />{o.phone}</p></div>)}
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
