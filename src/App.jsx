import './App.css'
import { useState } from 'react'
import LandingPage from './pages/landing.jsx'
import SummaryPage from './pages/summary.jsx'

function App() {
  const [page, setPage] = useState('landing')
  const pages = {
    landing: <LandingPage onNavigate={setPage} />,
    summary: <SummaryPage />
  }

  return (
    <>
      <nav className="navbar">
        <button onClick={() => setPage('landing')}>Home</button>
        <button onClick={() => setPage('summary')}>Summary</button>
      </nav>
      <div className="page-container">
        {pages[page]}
      </div>
    </>
  )
}

export default App
