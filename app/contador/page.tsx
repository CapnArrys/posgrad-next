'use client'
import {useState} from "react"

const contador = () => {
    const [contagem, setContagem] = useState(0)

    const incrementar = () => {
        setContagem(contagem + 1)

    }

    const decrementar = () => {
        setContagem(contagem - 1)
    }
  return (
    <div>
      <h1 style={{padding: 30}}>Contador de cliques</h1>
      <h2 style={{padding: 30}}>Contagem: {contagem}</h2>
      <button style={{padding: 25}} onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  )
}

export default contador

