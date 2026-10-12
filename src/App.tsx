import { useEffect } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { RecorridoPage } from './pages/RecorridoPage'
import { GaleriaPage } from './pages/GaleriaPage'
import { InscripcionPage } from './pages/InscripcionPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

function Layout() {
  return (
    <div className="page-shell">
      <ScrollToTop />
      <Header />
      <main className="page-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/recorrido" element={<RecorridoPage />} />
        <Route path="/galeria" element={<GaleriaPage />} />
        <Route path="/inscripcion" element={<InscripcionPage />} />
      </Route>
    </Routes>
  )
}

export default App
