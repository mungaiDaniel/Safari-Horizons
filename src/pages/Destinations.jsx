import { useState } from 'react'
import { Link } from 'react-router-dom'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import { PageHero } from '../components/Bits'
import { destinations } from '../data/content'
import { media } from '../data/media'

const groups = ['All', 'Africa', 'Beach', 'City']

export default function Destinations() {
  const [g, setG] = useState('All')
  const list = destinations.filter((d) => g === 'All' || d.group === g)
  return (
    <>
      <PageHero eyebrow="Destinations" title="Where will you go?" text="Safari parks, island beaches and world cities, all in one place." img={media.heroBeach} />
      <section className="section">
        <div className="container">
          <div className="tabs">{groups.map((x) => <button key={x} className={`tab ${g === x ? 'is-on' : ''}`} onClick={() => setG(x)}>{x}</button>)}</div>
          <div className="grid grid--4 tiles" key={g}>
            {list.map((d, i) => (
              <Reveal key={d.name} delay={(i % 4) * 0.07}>
                <Link to={`/quote`} className="tile">
                  <Img src={d.img} alt={d.name} />
                  <div className="tile__text"><h3>{d.name}</h3><span>{d.country}</span><p>{d.blurb}</p></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
