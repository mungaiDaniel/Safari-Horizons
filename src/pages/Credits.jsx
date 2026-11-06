import { PageHero } from '../components/Bits'
import { media } from '../data/media'
import unsplash from '../data/credits-unsplash.json'
import pixabay from '../data/credits-pixabay.json'

const people = Object.values(unsplash).reduce((acc, c) => {
  acc[c.photographer] = c.profile
  return acc
}, {})

export default function Credits() {
  return (
    <>
      <PageHero eyebrow="Credits" title="Photo credits" text="With thanks to the photographers who share their work." img={media.heroWildlife} />
      <section className="section">
        <div className="container article">
          <p>Photographs courtesy of <a href="https://unsplash.com/?utm_source=safari_horizons&utm_medium=referral" style={{ color: 'var(--amber)' }}>Unsplash</a> contributors:</p>
          <p>Video clips courtesy of <a href="https://pixabay.com" style={{ color: 'var(--amber)' }}>Pixabay</a>: {Object.values(pixabay).map((v) => v.user).join(', ')}.</p>
          <ul className="ticks">
            {Object.entries(people).sort().map(([name, url]) => (
              <li key={name}><a href={url} target="_blank" rel="noreferrer" style={{ color: 'var(--forest-2)', fontWeight: 600 }}>{name}</a></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
