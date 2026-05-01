import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Implantes from './pages/Implantes'

function AnimatedRoutes() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setVisible(false)
      const t = setTimeout(() => {
        setDisplayLocation(location)
        setVisible(true)
        window.scrollTo(0, 0)
      }, 280)
      return () => clearTimeout(t)
    }
  }, [location])

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.28s ease' }}>
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/implantes" element={<Implantes />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
