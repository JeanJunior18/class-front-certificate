import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../api/axios"
import { ICertificado } from "../interfaces/ICertificado"

export function Certificado() {
  const { idCertificado } = useParams()

  const [certificado, setCertificado] = useState<ICertificado | null>(null)

  function pegaCertificadoPeloId() {
    console.log('Pega certificado ' + idCertificado)
    api.get(`/certificate/${idCertificado}`).then((response) => {
      setCertificado(response.data)
    })
  }

  useEffect(() => {
    pegaCertificadoPeloId()
  }, [])

  if (!certificado) {
    return <span>Carregando...</span>
  }

  return (
    <div>
      <h1>{certificado.name}</h1>
      <span>{certificado.course}</span>
      <span>{new Date(certificado.date).toLocaleString()}</span>
    </div>
  )
}