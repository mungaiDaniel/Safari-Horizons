import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Phone, Menu, X, MessageCircle, MapPin, Mail } from 'lucide-react'
import { brand } from '../data/brand'

const links = [
  ['/tours', 'Tours'],
  ['/destinations', 'Destinations'],
  ['/deals', 'Deals'],
  ['/services', 'Services'],
  ['/blog', 'Journal'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const solid = scrolled || pathname !== '/'

  return (
    <>
      <header className={`nav ${solid ? 'nav--solid' : ''}`}>
        <div className="container nav__inner">
          <Link to="/" className="logo">
            <span className="logo__mark">◐</span>{brand.name}
          </Link>
          <nav className={`nav__links ${open ? 'is-open' : ''}`}>
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'active' : '')}>{label}</NavLink>
            ))}
            <Link to="/quote" className="btn btn--accent nav__cta">Get a Quote</Link>
          </nav>
          <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="nav__phone"><Phone size={16} />{brand.phone}</a>
          <button className="nav__toggle" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main><Outlet /></main>

      <footer className="footer">
        <div className="container footer__grid">
          <div>
            <div className="logo logo--light"><span className="logo__mark">◐</span>{brand.name}</div>
            <p className="footer__muted">{brand.tagline}. Safaris, beach escapes and flights for travellers who want more than a package.</p>
            <div className="socials">
              <a href={brand.socials.facebook} aria-label="Facebook">f</a>
              <a href={brand.socials.instagram} aria-label="Instagram">ig</a>
              <a href={brand.socials.youtube} aria-label="YouTube">yt</a>
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <Link to="/tours">Tours</Link><Link to="/destinations">Destinations</Link>
            <Link to="/deals">Deals</Link><Link to="/blog">Journal</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/about">About us</Link><Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link><Link to="/quote">Request a quote</Link>
          </div>
          <div>
            <h4>Contact</h4>
            {brand.offices.map((o) => (
              <p key={o.city} className="footer__muted"><MapPin size={14} /> {o.city}<br />{o.address}</p>
            ))}
            <a href={`tel:${brand.phone.replace(/\s/g, '')}`}><Phone size={14} /> {brand.phone}</a>
            <a href={`mailto:${brand.email}`}><Mail size={14} /> {brand.email}</a>
          </div>
        </div>
        <div className="container footer__bottom">
          <span>© {brand.year} {brand.name}. All rights reserved.</span>
          <Link to="/credits" style={{ margin: 0 }}>Photo credits</Link>
        </div>
      </footer>

      <a className="whatsapp" href={`https://wa.me/${brand.whatsapp}?text=Hi, I'd like to plan a trip`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <MessageCircle />
      </a>
    </>
  )
}
