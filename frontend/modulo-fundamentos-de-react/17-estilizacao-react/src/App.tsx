import './App.css'
import { BotaoStyled } from './components/BoataoStyled'
import { BotaoExterno } from './components/BotaoExterno'
import { BotaoModule } from './components/BotaoModule'

function App() {

  return (
    <>
      <BotaoExterno />
      <BotaoModule />
      <BotaoStyled />
      <BotaoStyled />

      
      {/* <button className='my-button'>Clique aqui também</button> */}
      {/* <button className='myButton'>botão externo 2</button> */}
    </>
  )
}

export default App
