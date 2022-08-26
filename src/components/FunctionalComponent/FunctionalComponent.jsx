import './styles.css';

const FunctionalComponent = ({ titulo, numero, booleano }) => {
  console.log(booleano);

  return (
    // Div Padre
    <div className="test-css">
      <h2>
        Hola soy {titulo} {numero}
      </h2>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default FunctionalComponent;
