import './App.css'
import CharacterList from './pages/CharactersList'
import Charater from './pages/Character';
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<CharacterList />} />
        <Route path='/:id' element={<Charater />} />
      </Routes>
    </div>
  )
}

export default App
