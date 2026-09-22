import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PerfilPage from './pages/Perfil'
import Cart from './Components/Cart'
import { GlobalCss } from './Components/styles'

function App() {
  return (
    <BrowserRouter>
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:id" element={<PerfilPage />} />
      </Routes>
      <GlobalCss />
    </BrowserRouter>
  )
}

export default App