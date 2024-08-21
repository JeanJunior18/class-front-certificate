import { useState } from "react"
import { Link } from "react-router-dom"

export function Home() {
  const [counter, setCounter] = useState(0)

  function aumentarContador() {
    setCounter(counter + 1)
    console.log(counter)
  }

  return (
  <div className="card">
    <h1>Home</h1>

    Contador: {counter}

    <button onClick={aumentarContador}>Aumentar contador</button>

    <Link to='/certificado'>
      <button>Ir para certificados</button>
    </Link>
  </div>
  )
}