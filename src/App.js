
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Frase from './Components/Frase';
import {useState, useEffect} from 'react';

function App() {
  //crear el state
  const [personaje, setPersonaje] = useState({}) 
 
  useEffect(()=>{
    consultarAPI();
  },[]);

  //uso async y await. async en la funcion y await en el lugar que yo quiero esperar la respuesta. Siempre se usan los dos juntos.
  const consultarAPI = async() => {
    const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const resultado = await respuesta.json(); //creo la variable para poder ver la respuesta 
    console.log(resultado[0]);
    setPersonaje(resultado[0]);
  }
  //fetch se encarga de hacer la peticion
  return (
   <section className="container d-flex flex-column align-items-center my-5">
     <img className="w-75" src={process.env.PUBLIC_URL+'logo.png'} alt=""/>
     <Button className="w-75 my-4 " variant="warning" onClick={()=>consultarAPI()}>Obtener frase</Button>
    <Frase personaje={personaje}></Frase>
   </section>
  );
}

export default App;
