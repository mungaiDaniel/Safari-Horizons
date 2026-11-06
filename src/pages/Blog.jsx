import { Link } from 'react-router-dom'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import { PageHero } from '../components/Bits'
import { posts } from '../data/content'
import { media } from '../data/media'

export default function Blog() {
  return (
    <>
      <PageHero eyebrow="Journal" title="Travel insights & inspiration" text="Guides, tips and stories from our specialists." img={media.blog1} />
      <section className="section">
        <div className="container grid grid--3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <Link to={`/blog/${p.slug}`} className="card">
                <div className="card__media"><Img src={p.img} alt={p.title} /><span className="badge">{p.cat}</span></div>
                <div className="card__body"><span className="muted small">{p.date} · {p.read}</span><h3>{p.title}</h3><p>{p.excerpt}</p></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
