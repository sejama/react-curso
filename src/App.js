import React, {useState} from 'react'
import Card from './components/Card'
const App = ()=>{
  const [tarjetas, setTarjetas] = useState([])

  // Se regresan elemento de JSX
  //const numero = 0

  // Objeto
  /*const componente = {
    numero:numero
  }*/

  const listaAlumnosSimple = ["Ivan","Esteban","Daniel"]

  const listaJSX = []
  listaAlumnosSimple.forEach((alumno,index)=>{
    listaJSX.push(<p key={index}>{alumno}</p>)
  })

  //const tarjetas = []
  /*for(let i=1;i<3;i++){
    tarjetas.push(<Card key={i} titulo={`La tarjeta numero ${i}`} numero={i}/>);
  }*/

  const agregarCard = () => {
    tarjetas.push(<Card key={tarjetas.length+1} titulo={`La tarjeta numero ${tarjetas.length+1}`} numero={tarjetas.length+1}/>)
    setTarjetas([...tarjetas])
  }
  const quitarCard = () => {
    tarjetas.pop()
    setTarjetas([...tarjetas])
  }
  //const listaAlumnos = [<p>Ivan</p>,<p>Esteban</p>,<p>Daniel</p>]
  return(
    <div>
      <h1 id='saludo'>Bienvenido a la APP en React</h1>
      <button onClick={agregarCard}>Agregar Tarjeta</button>
      <button onClick={quitarCard}>Quitar Tarjeta</button>
      <div className='cuadricula'>
        {tarjetas}
        
      </div>
      
      {/* {listaAlumnos} */}
      {listaJSX}
      {listaAlumnosSimple.map((alumno,index)=><p key={index}>{alumno}</p>)}
    </div>
  )
}

export default App