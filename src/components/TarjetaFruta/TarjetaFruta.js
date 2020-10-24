import React from 'react'
import styles from './TarjetaFruta.module.css'
//import './TarjetaFruta.css'
//styles.card
//styles['card-active']


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
    const activeClass = hasItems ? styles['card-active'] : ''
    const classes = styles.card + ' ' + activeClass
    return (
      <div className={styles.card}>
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
