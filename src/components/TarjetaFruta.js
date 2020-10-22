import React from "react";

class TarjetaFruta extends React.Component {
  state = {
    cantidad: 0
  };

  agregar = () =>
    this.setState({
      cantidad: this.state.cantidad + 1
    });

  quitar = () =>
    this.setState({
      cantidad: this.state.cantidad - 1
    });

  limpiar = () =>
    this.setState({
      cantidad: 0
    });

  render() {
    const hasItems = this.state.cantidad > 0
    const styles = {
        border: '1px solid black',
        marginBottom: '1em',
        borderRadius: '0.5em',
        padding: '1em',
        background: hasItems ? '#ebebeb' : '#fff',
        color: hasItems ? '#000' : '#000',
        transition: 'all 250ms ease-out'
    }
    return (
      <div style={styles}>
        <h3>{this.props.name}</h3>
        <div>Cantidad: {this.state.cantidad}</div><br />
        <button onClick={this.agregar}> + </button>
        <button onClick={this.quitar}> - </button>
        <button onClick={this.limpiar}> Limpiar </button>
        <hr />
        <p>$ {this.props.price}</p>
        <p>Total: $ { this.props.price * this.state.cantidad }</p>
      </div>
    );
  }
}

export default TarjetaFruta;
