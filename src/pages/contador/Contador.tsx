import { useState } from "react";

function Contador() {
 // let numero = 0
const [numero, setNumero] = useState (0)

  function somar () {
    setNumero (numero + 1)

  }
  
  return (
    <div>
      <h2>Componente Contador</h2>
      <p> número atual: {numero} </p>
      <button onClick = {somar}>Aumentar +1</button>

    </div>
  )
}

export default Contador