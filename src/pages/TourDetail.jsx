import { Link, useParams } from 'react-router-dom'
import { Check, Star, Clock, MapPin } from 'lucide-react'
import { PageHero, TourCard } from '../components/Bits'
import QuoteForm from '../components/QuoteForm'
import { getTour, tours } from '../data/tours'

export default function TourDetail() {
  const { slug } = useParams()
  const tour = getTour(slug)
  if (!tour)
    return (
      <section className="section container center" style={{ paddingTop: 180 }}>
        <h1>Tour not found</h1><Link to="/tours" className="btn btn--accent" style={{ marginTop: 24 }}>All tours</Link>
      </section>
    )
  const related = tours.filter((t) => t.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero eyebrow={tour.category} title={tour.title} text={tour.summary} img={tour.img} />
      <section className="section">
        <div className="container detail">
          <div>
            <div className="facts">
              <div className="fact"><span>Duration</span><strong>{tour.days} days</strong></div>
              <div className="fact"><span>Region</span><strong>{tour.region}</strong></div>
              <div className="fact"><span>From</span><strong>${tour.price.toLocaleString()} pp</strong></div>
            </div>
            <h2>Highlights</h2>
            <ul className="tags">{tour.highlights.map((h) => <li key={h}><Star size={16} />{h}</li>)}</ul>
            <h2>Itinerary</h2>
            <ul className="timeline">
              {tour.itinerary.map((d) => (
                <li key={d.title}><span className="day">Day {d.day}</span><h4>{d.title}</h4><p>{d.text}</p></li>
              ))}
            </ul>
            <h2>What's included</h2>
            <ul className="tags">{tour.includes.map((h) => <li key={h}><Check size={16} />{h}</li>)}</ul>
          </div>
          <aside className="side">
            <span className="muted small">Price from</span>
            <div className="big">${tour.price.toLocaleString()} <span className="muted small">per person</span></div>
            <p className="muted small" style={{ margin: '4px 0 20px' }}><Clock size={14} /> {tour.days} days · <MapPin size={14} /> {tour.region}</p>
            <QuoteForm compact preset={tour.title} />
          </aside>
        </div>
      </section>
      <section className="section section--sand">
        <div className="container">
          <h2 style={{ marginBottom: 32 }}>You might also like</h2>
          <div className="grid grid--3">{related.map((t) => <TourCard key={t.slug} tour={t} />)}</div>
        </div>
      </section>
    </>
  )
}
