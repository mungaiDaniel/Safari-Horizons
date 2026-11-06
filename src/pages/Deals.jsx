import { useState } from 'react'
import { PageHero, DealCard } from '../components/Bits'
import { beachDeals, residentDeals, visitorDeals } from '../data/content'
import { media } from '../data/media'

const tabs = { 'Beach Resorts': beachDeals, 'Resident Safaris': residentDeals, 'Visitor Safaris': visitorDeals }

export default function Deals() {
  const [tab, setTab] = useState('Beach Resorts')
  return (
    <>
      <PageHero eyebrow="Offers" title="Festive season deals" text="Prices are placeholders: update them in src/data/content.js." img={media.heroBeach} />
      <section className="section">
        <div className="container">
          <div className="tabs">{Object.keys(tabs).map((t) => <button key={t} className={`tab ${tab === t ? 'is-on' : ''}`} onClick={() => setTab(t)}>{t}</button>)}</div>
          <div className="grid grid--3" key={tab}>{tabs[tab].map((d, i) => <DealCard key={d.name} d={d} delay={i * 0.08} />)}</div>
          <div className="panel" style={{ marginTop: 56 }}>
            <h3 style={{ marginBottom: 12 }}>Child policy & notes</h3>
            <ul className="ticks">
              <li>Children 12+ are charged as adults; 3–11 as children; under 3 travel as infants.</li>
              <li>Rates are per person sharing and subject to availability.</li>
              <li>Supplements may apply on 24 and 31 December.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
