import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PerfilPage from './pages/Perfil/'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<PerfilPage />} /> {/* <--- Adicionamos o /:id aqui */}
  </Routes>
)

export default Rotas