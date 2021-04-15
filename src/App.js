
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import {useState, useEffect} from 'react';
import Frase from './Components/Frase';
import Spinner from './Components/Spinner';

function App() {
  //crear el state
  const [personaje, setPersonaje] = useState({});
  const [cargando, setCargando] = useState(false); 
 //en false la pagina no esta cargando y esta mostrando los elemntos. cuando esta en true esta cargando y aparece el spinner.
  useEffect(()=>{
    consultarAPI();
  },[]);

  //uso async y await. async en la funcion y await en el lugar que yo quiero esperar la respuesta. Siempre se usan los dos juntos.

   //fetch se encarga de hacer la peticion
  const consultarAPI = async() => {
    //mostrar spinner
    setCargando(true);
    const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const resultado = await respuesta.json(); //creo la variable para poder ver la respuesta 
    console.log(resultado[0]);
    //mostrar componente frase, con timeout de 3 segundos para que de la sensacion de que carga el spinner.
    setTimeout(()=>{
      setCargando(false);
      setPersonaje(resultado[0]);
    },3000);
    
  };
  //operador ternario. (condicion logica)?(codigo a ejecutar cuando es la condicion logica es verdadera):(codigo a ejecutar cuando la condicion es falsa)
  //componente condicional
  const mostrarComponente = (cargando === true)?(<Spinner></Spinner>):(<Frase personaje={personaje}></Frase>);

  return (
   <section className="container d-flex flex-column align-items-center my-5">
     <img className="w-75" src={process.env.PUBLIC_URL+'logo.png'} alt=""/>
     <Button className="w-75 my-4 " variant="warning" onClick={()=>consultarAPI()}>Obtener frase</Button>
     {mostrarComponente}
   </section>
  );
}

export default App;
