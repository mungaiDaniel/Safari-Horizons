import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Globe, BadgeDollarSign, Headset, ShieldCheck, ArrowRight, Search } from 'lucide-react'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import { SectionHead, TourCard, DealCard } from '../components/Bits'
import { media, videos } from '../data/media'
import { tours } from '../data/tours'
import { destinations, beachDeals, residentDeals, visitorDeals, team, testimonials, posts } from '../data/content'
import { brand } from '../data/brand'

const dealTabs = { 'Beach Resorts': beachDeals, 'Resident Safaris': residentDeals, 'Visitor Safaris': visitorDeals }

export default function Home() {
  const [tab, setTab] = useState('Beach Resorts')
  const nav = useNavigate()
  const [q, setQ] = useState({ dest: '', type: '', when: '' })

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <Img src={media.heroSafari} alt="" className="hero__bg" />
        <video className="hero__video" src={videos.hero} autoPlay muted loop playsInline poster={media.heroSafari}
          onError={(e) => (e.currentTarget.style.display = 'none')} />
        <div className="hero__shade" />
        <div className="container hero__body">
          <span className="eyebrow eyebrow--light">Safaris · Beaches · Flights</span>
          <h1>Discover Africa's <em>wild</em> heart & beyond</h1>
          <p>Tailor-made journeys from the plains of the Mara to the shores of Zanzibar, planned by people who know the way.</p>
          <div className="hero__cta">
            <Link to="/tours" className="btn btn--accent">Explore Tours <ArrowRight size={18} /></Link>
            <Link to="/quote" className="btn btn--ghost">Plan My Trip</Link>
          </div>
        </div>
        <div className="hero__stats">
          <div className="container">
            {[[`${2026 - brand.since}+`, 'Years of experience'], ['12k+', 'Happy travellers'], ['40+', 'Destinations'], ['24/7', 'Trip support']].map(([n, l]) => (
              <div key={l}><strong>{n}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* FINDER */}
      <div className="finder container">
        <form className="finder__box" onSubmit={(e) => { e.preventDefault(); nav(`/tours?type=${q.type}`) }}>
          <label>Destination
            <select value={q.dest} onChange={(e) => setQ({ ...q, dest: e.target.value })}>
              <option value="">Anywhere</option>
              {destinations.slice(0, 8).map((d) => <option key={d.name}>{d.name}</option>)}
            </select>
          </label>
          <label>Trip type
            <select value={q.type} onChange={(e) => setQ({ ...q, type: e.target.value })}>
              <option value="">All types</option><option>Safari</option><option>Beach</option><option>Honeymoon</option><option>Adventure</option><option>Luxury</option>
            </select>
          </label>
          <label>When<input type="month" value={q.when} onChange={(e) => setQ({ ...q, when: e.target.value })} /></label>
          <label>Guests<select><option>2 adults</option><option>1 adult</option><option>Family</option><option>Group</option></select></label>
          <button className="btn btn--accent" type="submit"><Search size={18} /> Search</button>
        </form>
      </div>

      {/* DESTINATIONS */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Where to next" title="Popular destinations" text="From savannah sunrises to island sunsets, pick a place and we'll handle everything else." />
          <div className="grid grid--4 tiles">
            {destinations.filter((d) => ['Maasai Mara', 'Zanzibar', 'Serengeti', 'Maldives', 'Cape Town', 'Dubai', 'Diani Beach', 'Paris'].includes(d.name)).map((d, i) => (
              <Reveal key={d.name} delay={(i % 4) * 0.08}>
                <Link to="/destinations" className="tile">
                  <Img src={d.img} alt={d.name} />
                  <div className="tile__text"><h3>{d.name}</h3><span>{d.country}</span><p>{d.blurb}</p></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TOURS */}
      <section className="section section--sand">
        <div className="container">
          <SectionHead eyebrow="Signature journeys" title="Suggested tours" text="Treat these as inspiration. Every trip is shaped around you by a specialist." />
          <div className="grid grid--3">
            {tours.slice(0, 6).map((t, i) => <TourCard key={t.slug} tour={t} delay={(i % 3) * 0.1} />)}
          </div>
          <div className="center" style={{ marginTop: 44 }}><Link to="/tours" className="btn btn--accent">View all tours</Link></div>
        </div>
      </section>

      {/* DEALS */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Limited offers" title="Festive season deals" text="Beach resorts and safari camps at special rates. Book early; dates fill fast." />
          <div className="tabs">
            {Object.keys(dealTabs).map((t) => <button key={t} className={`tab ${tab === t ? 'is-on' : ''}`} onClick={() => setTab(t)}>{t}</button>)}
          </div>
          <div className="grid grid--4" key={tab}>
            {dealTabs[tab].map((d, i) => <DealCard key={d.name} d={d} delay={i * 0.08} />)}
          </div>
          <div className="center" style={{ marginTop: 40 }}><Link to="/deals" className="link-arrow">See every deal <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      {/* WHY */}
      <section className="section section--forest">
        <div className="container">
          <SectionHead eyebrow="Why travel with us" title="Travel that feels effortless" />
          <div className="grid grid--4">
            {[[Globe, 'Global coverage', 'Flights and stays worldwide through trusted partners.'],
              [BadgeDollarSign, 'Best price promise', 'Honest quotes and price matching.'],
              [Headset, '24/7 support', 'A real person on the line, any hour.'],
              [ShieldCheck, 'Travel protection', 'Insurance options to keep you covered.']].map(([I, t, p], i) => (
              <Reveal key={t} delay={i * 0.1}><div className="feature"><div className="feature__icon"><I /></div><h3>{t}</h3><p>{p}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Meet the experts" title="Speak to a specialist" text="Call us or book a video chat to start planning your tailor-made trip." />
          <div className="grid grid--3">
            {team.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div className="person"><div className="img-wrap"><Img src={p.img} alt={p.name} /></div><h3>{p.name}</h3><p className="muted">{p.role}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--forest">
        <div className="container">
          <SectionHead eyebrow="Kind words" title="What our travellers say" />
          <div className="grid grid--4">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="quote"><div className="stars">★★★★★</div><p>“{t.text}”</p><strong>{t.name}</strong><span>{t.role}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Journal" title="Travel insights & inspiration" />
          <div className="grid grid--3">
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <Link to={`/blog/${p.slug}`} className="card">
                  <div className="card__media"><Img src={p.img} alt={p.title} /><span className="badge">{p.cat}</span></div>
                  <div className="card__body"><span className="muted small">{p.date} · {p.read}</span><h3>{p.title}</h3><p>{p.excerpt}</p></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <Img src={media.cta} alt="" className="cta__bg" />
        <video className="cta__bg" src={videos.beach} autoPlay muted loop playsInline onError={(e) => (e.currentTarget.style.display = 'none')} />
        <div className="cta__shade" />
        <div className="container">
          <Reveal>
            <h2>Ready for the trip of a lifetime?</h2>
            <p>Tell us your dream and we'll send a personalised itinerary and quote within 24 hours.</p>
            <Link to="/quote" className="btn btn--accent">Request a Free Quote</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
