import './styles.css';

const Boton = ({ funcion }) => {
  return (
    <button onClick={funcion} className="boton-prueba">
      Boton
    </button>
  );
};

export default Boton;
