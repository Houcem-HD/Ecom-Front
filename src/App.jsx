import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menu>
      <Router>
        <Routes>
          
        </Routes>
      </Router>
    </Menu>
    </>
  )
}

export default App
