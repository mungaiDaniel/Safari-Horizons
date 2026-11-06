import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import { PageHero, SectionHead } from '../components/Bits'
import { team } from '../data/content'
import { media } from '../data/media'
import { brand } from '../data/brand'

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title={`Your travel partner since ${brand.since}`} text="Local knowledge, honest advice and a love for the places we send you." img={media.about} />
      <section className="section">
        <div className="container split">
          <Reveal><div className="split__img"><Img src={media.about} alt="Our team" /></div></Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Our story</span>
            <h2>Travel designed around people</h2>
            <p>We started as a small desk selling flights and grew into a full travel company. Today we plan safaris, beach holidays, corporate trips and honeymoons for thousands of guests each year.</p>
            <p>Every itinerary is built by specialists who have been there, so you get honest recommendations instead of a catalogue.</p>
            <ul className="ticks">
              {['Locally owned and operated', 'Specialists for safari, beach and gorilla trips', 'Transparent pricing with no hidden fees', 'Support from first enquiry to flight home'].map((t) => <li key={t}><CheckCircle2 size={18} />{t}</li>)}
            </ul>
            <Link to="/contact" className="btn btn--accent">Talk to us</Link>
          </Reveal>
        </div>
      </section>
      <section className="section section--sand">
        <div className="container">
          <SectionHead eyebrow="The team" title="People you'll talk to" />
          <div className="grid grid--3">
            {team.map((p, i) => <Reveal key={p.name} delay={i * 0.1}><div className="person"><div className="img-wrap"><Img src={p.img} alt={p.name} /></div><h3>{p.name}</h3><p className="muted">{p.role}</p></div></Reveal>)}
          </div>
        </div>
      </section>
    </>
  )
}
