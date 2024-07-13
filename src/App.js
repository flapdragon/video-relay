import { Routes, Route } from 'react-router-dom'
import List from './List'
import Player from './Player'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/player/:id" element={<Player />} />
    </Routes>
  )
}

export default App
