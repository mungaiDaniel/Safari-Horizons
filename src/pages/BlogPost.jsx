import { Link, useParams } from 'react-router-dom'
import { PageHero } from '../components/Bits'
import { posts } from '../data/content'

export default function BlogPost() {
  const { slug } = useParams()
  const p = posts.find((x) => x.slug === slug)
  if (!p)
    return <section className="section container center" style={{ paddingTop: 180 }}><h1>Article not found</h1><Link to="/blog" className="btn btn--accent" style={{ marginTop: 24 }}>Back to journal</Link></section>
  return (
    <>
      <PageHero eyebrow={p.cat} title={p.title} img={p.img} />
      <section className="section">
        <article className="container article">
          <div className="article-meta"><span>{p.date}</span><span>{p.read} read</span><span>By {p.author}</span></div>
          {p.body.map((t, i) => <p key={i}>{t}</p>)}
          <Link to="/blog" className="link-arrow">← All articles</Link>
        </article>
      </section>
    </>
  )
}
