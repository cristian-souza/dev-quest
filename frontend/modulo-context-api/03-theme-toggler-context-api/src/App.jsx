
import './App.css'
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button'
import { ThemeProvider } from './contexts/theme-context'

function App() {

  return (
    <ThemeProvider>
      <ThemeTogglerButton />
    </ThemeProvider>
  )
}

export default App
