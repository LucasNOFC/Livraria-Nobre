import { useState } from 'react';
import Header from './components/Header';
import Landpage from './pages/Landpage';
import ExclusivePage from './pages/ExclusivePage';
import ProductPage from './pages/ProductPage';
import './styles/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <ExclusivePage/>
    </div>
  )
}

export default App
