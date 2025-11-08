import { Link } from 'react-router-dom'
import './home.css'

export default function Home() {
  return (
    <div className="home-landing">
      <main className="hero-card">
        <div className="hero-grid vertical-variant">
          <section className="hero-content">
            <div className="brand">UTL — Encuentro Digital</div>
            <h1>Explora, conecta y aprende</h1>
            <p className="lead">Bienvenido al espacio donde la comunidad comparte proyectos, talleres y oportunidades. Empieza tu registro o revisa la lista de asistentes.</p>

            <div className="hero-actions">
              <Link to="/registro" className="btn btn-primary">Comenzar</Link>
              <Link to="/participantes" className="btn btn-outline">Lista de asistentes</Link>
            </div>
          </section>

          <aside className="hero-visual" aria-hidden="true">
            <div className="visual-shape"></div>
            <div className="visual-caption">Encuentro Digital · 2025</div>
          </aside>
        </div>
      </main>
    </div>
  )
}
