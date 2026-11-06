import { Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tours from './pages/Tours'
import TourDetail from './pages/TourDetail'
import Destinations from './pages/Destinations'
import Deals from './pages/Deals'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import Contact from './pages/Contact'
import Quote from './pages/Quote'
import Credits from './pages/Credits'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tours" element={<Tours />} />
        <Route path="tours/:slug" element={<TourDetail />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="deals" element={<Deals />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="quote" element={<Quote />} />
        <Route path="credits" element={<Credits />} />
        <Route path="*" element={
          <section className="section container center" style={{ paddingTop: 180 }}>
            <h1>Page not found</h1><p className="muted" style={{ margin: '12px 0 24px' }}>That trail doesn't lead anywhere.</p>
            <Link to="/" className="btn btn--accent">Back home</Link>
          </section>
        } />
      </Route>
    </Routes>
  )
}
