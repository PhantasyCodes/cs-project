import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.css'

import Home from './routes/Home'
import Article from './routes/Article'

function App() {
  const location = useLocation()

  return (
    <>
      <AnimatePresence wait>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
