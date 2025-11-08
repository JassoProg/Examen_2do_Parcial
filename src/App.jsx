import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Participantes from './pages/Participantes'
import Registro from './pages/Registro'
import Gafete from './pages/Gafete'

function App() {
  return (
    <div className="app-root">
      <aside className="app-sidebar">
        <Link to="/" className="brand sidebar-brand">
          <img src="/logo_utl_2025.png" alt="UTL" className="brand-logo" />
          <span className="brand-text">Encuentro Digital UTL</span>
        </Link>

        <nav className="sidebar-nav">
          <Link to="/">Inicio</Link>
          <Link to="/participantes">Asistentes</Link>
          <Link to="/registro">Registro</Link>
        </nav>
      </aside>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/participantes" element={<Participantes />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/gafete/:id" element={<Gafete />} />
        </Routes>
      </main>
      <footer className="app-footer">© Universidad Tecnológica de León — Encuentro Digital 2025</footer>
    </div>
  )
}

export default App
