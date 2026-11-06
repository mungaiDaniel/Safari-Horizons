import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PageHero, TourCard } from '../components/Bits'
import { tours } from '../data/tours'
import { media, videos } from '../data/media'

const cats = ['All', 'Safari', 'Beach', 'Honeymoon', 'Adventure', 'Luxury']

export default function Tours() {
  const [params] = useSearchParams()
  const [cat, setCat] = useState(cats.includes(params.get('type')) ? params.get('type') : 'All')
  const list = tours.filter((t) => cat === 'All' || t.category.includes(cat))

  return (
    <>
      <PageHero eyebrow="Tours" title="Journeys worth taking" text="Hand-built itineraries across East Africa and beyond." img={media.heroWildlife} video={videos.wildlife} />
      <section className="section">
        <div className="container">
          <div className="tabs">
            {cats.map((c) => <button key={c} className={`tab ${cat === c ? 'is-on' : ''}`} onClick={() => setCat(c)}>{c}</button>)}
          </div>
          <div className="grid grid--3" key={cat}>
            {list.map((t, i) => <TourCard key={t.slug} tour={t} delay={(i % 3) * 0.08} />)}
          </div>
          {!list.length && <p className="center muted">No tours in this category yet. <a href="/quote" style={{ color: 'var(--amber)' }}>Ask us for a custom one.</a></p>}
        </div>
      </section>
    </>
  )
}
