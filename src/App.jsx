import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'

import Home from './pages/Home'
import About from './pages/About'
import Visit from './pages/Visit'
import Kids from './pages/Kids'
import Serve from './pages/Serve'
import Give from './pages/Give'
import Echariria from './pages/Echariria'
import Missions from './pages/Missions'
import Watch from './pages/Watch'
import Contact from './pages/Contact'
import Pray from './pages/Pray'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()
  return (
    <>
      <SmoothScroll />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"          element={<Home />} />
          <Route path="/about"     element={<About />} />
          <Route path="/visit"     element={<Visit />} />
          <Route path="/im-new"    element={<Visit />} />
          <Route path="/kids"      element={<Kids />} />
          <Route path="/serve"     element={<Serve />} />
          <Route path="/give"      element={<Give />} />
          <Route path="/echariria" element={<Echariria />} />
          <Route path="/missions"  element={<Missions />} />
          <Route path="/watch"     element={<Watch />} />
          <Route path="/contact"   element={<Contact />} />
          <Route path="/pray"      element={<Pray />} />
          <Route path="/login"     element={<Login />} />
          <Route path="*"          element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
