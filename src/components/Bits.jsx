import { Link } from 'react-router-dom'
import { Clock, MapPin, ArrowRight } from 'lucide-react'
import Img from './Img'
import Reveal from './Reveal'

export function SectionHead({ eyebrow, title, text, center = true }) {
  return (
    <Reveal className={`section-head ${center ? 'center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  )
}

export function PageHero({ title, text, img, eyebrow, video }) {
  return (
    <section className="page-hero">
      <Img src={img} alt="" className="page-hero__bg" />
      {video && <video className="page-hero__bg" src={video} autoPlay muted loop playsInline poster={img}
        onError={(e) => (e.currentTarget.style.display = 'none')} />}
      <div className="page-hero__shade" />
      <div className="container page-hero__body">
        {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  )
}

export function TourCard({ tour, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Link to={`/tours/${tour.slug}`} className="card tour-card">
        <div className="card__media">
          <Img src={tour.img} alt={tour.title} />
          <span className="badge">{tour.category}</span>
        </div>
        <div className="card__body">
          <span className="muted small"><MapPin size={14} /> {tour.region}</span>
          <h3>{tour.title}</h3>
          <p>{tour.summary}</p>
          <div className="card__foot">
            <span className="muted small"><Clock size={14} /> {tour.days} days</span>
            <span className="price">from <strong>${tour.price.toLocaleString()}</strong></span>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

export function DealCard({ d, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <article className="card deal-card">
        <div className="card__media"><Img src={d.img} alt={d.name} /><span className="badge badge--hot">{d.valid}</span></div>
        <div className="card__body">
          <span className="muted small"><MapPin size={14} /> {d.place}</span>
          <h3>{d.name}</h3>
          <ul className="meta">
            <li>{d.board}</li><li>{d.nights}</li>
          </ul>
          <div className="card__foot">
            <span className="price">from <strong>{d.price}</strong></span>
            <Link to="/quote" className="link-arrow">Enquire <ArrowRight size={15} /></Link>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
