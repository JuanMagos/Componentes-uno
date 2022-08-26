import Boton from '../Boton/Boton';
import FunctionalComponent from '../FunctionalComponent/FunctionalComponent';
import Titulo from '../Titulo/Titulo';

const Contenedor = () => {
  const estaEsLaFuncion = () => {
    console.log('Esta es la función');
  };
  return (
    <div>
      <Titulo titulo="Soy un contenedor" />
      <FunctionalComponent titulo={'Hola'} numero={10} booleano={false} />
      <Boton funcion={estaEsLaFuncion} />
    </div>
  );
};

export default Contenedor;
