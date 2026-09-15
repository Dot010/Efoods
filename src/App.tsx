import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PerfilPage from './pages/Perfil'
import { GlobalCss } from './Components/styles'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<PerfilPage />} />
      </Routes>
      <GlobalCss /> 
    </BrowserRouter>
  )
}

export default App