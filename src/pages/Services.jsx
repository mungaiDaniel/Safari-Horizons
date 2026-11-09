import { Link } from 'react-router-dom'
import { Plane, Hotel, Compass, Car, FileCheck, Shield, Users, Heart, House } from 'lucide-react'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import { PageHero, SectionHead } from '../components/Bits'
import { services, fleet, airbnbStays } from '../data/content'
import { media } from '../data/media'

const icons = { Plane, Hotel, Compass, Car, FileCheck, Shield, Users, Heart, House }

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Everything your trip needs" text="Flights, hotels, Airbnb stays, safaris, transfers and the paperwork in between." img={media.heroFlights} />
      <section className="section">
        <div className="container">
          <div className="grid grid--4">
            {services.map((s, i) => {
              const I = icons[s.icon]
              return <Reveal key={s.title} delay={(i % 4) * 0.07}><div className="service"><div className="feature__icon"><I /></div><h3>{s.title}</h3><p>{s.text}</p></div></Reveal>
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Airbnb & vacation rentals" title="Stay like a local" text="We find and book the right Airbnb for your trip, then look after you from check-in to check-out." />
          <div className="grid grid--3">
            {airbnbStays.map((f, i) => (
              <Reveal key={f.name} delay={(i % 3) * 0.08}>
                <div className="card">
                  <div className="card__media"><Img src={f.img} alt={f.name} /></div>
                  <div className="card__body"><h3>{f.name}</h3><span className="muted small">{f.place} · {f.seats}</span><p>{f.text}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="center" style={{ marginTop: 40 }}><Link to="/quote" className="btn btn--accent">Request an Airbnb booking</Link></div>
        </div>
      </section>
      <section className="section section--sand">
        <div className="container">
          <SectionHead eyebrow="Airport transfers" title="Our transfer fleet" text="Meet-and-greet pickups, flight tracking and fixed prices." />
          <div className="grid grid--3">
            {fleet.map((f, i) => (
              <Reveal key={f.name} delay={(i % 3) * 0.08}>
                <div className="card">
                  <div className="card__media"><Img src={f.img} alt={f.name} /></div>
                  <div className="card__body"><h3>{f.name}</h3><span className="muted small">{f.seats}</span><p>{f.text}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="center" style={{ marginTop: 40 }}><Link to="/quote" className="btn btn--accent">Get a transfer quote</Link></div>
        </div>
      </section>
    </>
  )
}
