import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/:username' element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App
