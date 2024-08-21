import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './pages/Home.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ListaCertificados } from './pages/ListaCertificados.tsx'
import { Certificado } from './pages/Certificado.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/certificado',
    element: <ListaCertificados />
  },
  {
    path: '/certificado/:idCertificado',
    element: <Certificado />
  },
  {
    path: '*',
    element: <h1>Página não encontrada</h1>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
