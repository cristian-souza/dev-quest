import './App.css'
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button'
import { ThemeProvider } from './contexts/theme-context'
import { Card } from './components/card/card'

function App() {

  return (
    <ThemeProvider>
      <ThemeTogglerButton />
      <Card />
      <Card />
      <Card />
    </ThemeProvider>
  )
}

export default App
