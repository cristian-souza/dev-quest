import { Component } from 'react'
import './button.css'

// const Button = ({label}) => {
//   return <button className="btn">{label}</button>
// }

const sayHello = () => {
  console.log('Olá')
}

class Button extends Component {
  render() {
    return <Button className="btn" onClick={sayHello}>{this.props.label}</Button>
  }
}

Button.defaultProps = {
  label: "Clica aqui"
}

export default Button