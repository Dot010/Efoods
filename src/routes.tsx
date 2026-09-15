import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PerfilPage from './pages/Perfil/'


const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<PerfilPage />} />
  </Routes>
)

export default Rotas