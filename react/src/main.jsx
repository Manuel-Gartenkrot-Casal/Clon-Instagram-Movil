import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Publicaciones from './publicaciones.jsx'
import BarraLateral from './barraLateral.jsx'
import Header from './Header.jsx';
import Stories from "./stories.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Stories />
    <BarraLateral />
    <Publicaciones />
  </StrictMode>,
)