import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
import Boton from './components/Boton/Boton';
import Titulo from './components/Titulo/Titulo';
import Contenedor from './components/Contenedor/Contenedor';
import Padre from './components/Padre/Padre';

function App() {
  const titulo = 'Prop de componente de funcion';

  const handleClick = () => {
    alert('Me dieron click');
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <Titulo titulo="Este es el titulo" /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <Padre>
          <div>
            <h2>Soy el children</h2>
            <h2>Soy hermano del children</h2>
          </div>
        </Padre>
        {/* <Contenedor /> */}
        {/* <ClassComponent titulo="Prop de componente de clase" numero={5} /> */}
        {/* <FunctionalComponent titulo={titulo} numero={3} booleano={true} /> */}
        {/* <Boton funcion={handleClick} /> */}
      </header>
    </div>
  );
}

export default App;
