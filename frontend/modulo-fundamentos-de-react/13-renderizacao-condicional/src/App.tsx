import './App.css'
import { Dashboard } from './components/Dashboard'

function App() {

  return (
    <>
     <Dashboard username="Cristian" ></Dashboard>

     <Dashboard username={null}></Dashboard>

    </>
  )
}

export default App
