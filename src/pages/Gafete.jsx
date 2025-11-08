import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'
import { avatarUrl } from '../utils/avatar'
import './gafete.css'

export default function Gafete() {
  const { id } = useParams()
  const [p, setP] = useState(null)
  const [loading, setLoading] = useState(true)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const f = async () => {
      try {
        const res = await api.get(`/participante/${id}`)
        setP(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    f()
  }, [id])

  if (loading) return <p>Cargando gafete...</p>
  if (!p) return <p>Participante no encontrado.</p>

  return (
    <div className="container py-4">
      <div className="d-flex flex-column align-items-center">
        <div className="gafete-wrapper mb-3">
          <div className={`gafete-card ${flipped ? 'flipped' : ''}`}>
            <div className="gafete-face front">
              <div className="front-top text-center">
                <img src={avatarUrl(p)} alt="avatar" className="avatar-large mb-3" onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png' }} />
                <h3 className="mb-0">{p.nombre} {p.apellidos}</h3>
                <p className="muted mb-0">{p.ocupacion}</p>
              </div>
              <div className="front-bottom mt-3 text-center">
                <p className="mb-1 small">{p.email}</p>
                <p className="mb-0">@{p.twitter}</p>
              </div>
            </div>
            <div className="gafete-face back">
              <div className="back-content p-3">
                <h5 className="mb-2">Datos del asistente</h5>
                <p className="small text-muted mb-2">Clave interna: {p.id}</p>
                <p className="small mb-2">Profesión: {p.ocupacion}</p>
                <p className="small mb-2">Contacto: {p.email}</p>
                <hr />
                <p className="small">Tarjeta generada para el Encuentro Digital UTL 2025.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-outline-secondary me-2" onClick={() => setFlipped((s) => !s)}>{flipped ? 'Mostrar frente' : 'Mostrar reverso'}</button>
          <a className="btn btn-primary" href={`https://twitter.com/${p.twitter}`} target="_blank" rel="noreferrer">Abrir Twitter</a>
        </div>
      </div>
    </div>
  )
}
