import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Publicacion from './publicacion.jsx'
import BarraLateral from './barraLateral.jsx'
import Header from './Header.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header/>
    <BarraLateral/>
    <Publicacion />
  </StrictMode>,
)