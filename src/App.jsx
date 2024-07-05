import { DataProvider } from './components/context/DataContext'
import Home from './pages/Home'

function App() {
  return (
    <DataProvider>
      <Home /> 
    </DataProvider>
  )
}

export default App
