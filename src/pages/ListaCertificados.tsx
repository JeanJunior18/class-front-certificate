import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { api } from "../api/axios"
import { ICertificado } from "../interfaces/ICertificado"

export function ListaCertificados() {
  const [certificados, setCertificados] = useState<ICertificado[]>([])

  function pegaCertificados ( ){
    console.log('Pegando certificados')

    api.get('/certificate').then((response) => {
      console.log(response.data)
      setCertificados(response.data)
    })
  }

  useEffect(() => {
    pegaCertificados()
  }, [])

  return (
    <div className="card">
      {certificados.map((certificado) => (
        <Link key={certificado.id} to={'/certificado/' + certificado.id}>
         <li> {certificado.name} - {certificado.course}</li>
        </Link>
      ))}
    </div>
  )
}