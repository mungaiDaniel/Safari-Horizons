import { PageHero } from '../components/Bits'
import QuoteForm from '../components/QuoteForm'
import { media } from '../data/media'

export default function Quote() {
  return (
    <>
      <PageHero eyebrow="Free quote" title="Request your personal quote" text="Tell us where, when and who with. We'll do the rest." img={media.heroBeach} />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}><div className="panel"><QuoteForm /></div></div>
      </section>
    </>
  )
}
