import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from './routes/Home'

function App() {
  const location = useLocation()

  return (
    <>
      <AnimatePresence wait>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
