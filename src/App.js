
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Frase from './Components/Frase';

function App() {
  return (
   <section className="container d-flex flex-column align-items-center my-5">
     <img src={process.env.PUBLIC_URL+'logo.png'} alt=""/>
     <Button className="w-75 my-4 " variant="warning">Obtener frase</Button>
    <Frase></Frase>
   </section>
  );
}

export default App;
