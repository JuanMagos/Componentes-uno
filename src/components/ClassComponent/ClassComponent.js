import { Component } from 'react';

class ClassComponent extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Hola Soy un {this.props.titulo}</h2>
      </div>
    );
  }
}

export default ClassComponent;
