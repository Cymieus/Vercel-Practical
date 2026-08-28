import './App.css'
import { useState } from 'react'
import LandingPage from './pages/landing.jsx'
import SummaryPage from './pages/summary.jsx'

function App() {
  const [page, setPage] = useState('landing')
  const pages = {
    landing: <LandingPage onNavigate={setPage} />,
    summary: <SummaryPage onNavigate={setPage} />
  }
  const [gadgets, setGadgets] = useState([
    { id: 1, name: 'Example Gadget', category: 'Smartphone', manufacturer: 'Example Manufacturer', healthRating: 85, brand: 'Example Brand', role: 'Engineer/Tester' }
  ]);

  const addGadget = (gadget) => {
    setGadgets([...gadgets, { ...gadget, id: gadgets.length + 1 }]);
  }

  return (
    <>
      <nav className="navbar">
        <button onClick={() => setPage('landing')} className='text-2xl font-bold text-violet-800 p-4'>Home</button>
        <button onClick={() => setPage('summary')} className='text-2xl font-bold text-violet-800 p-4'>Summary</button>
      </nav>
      <div className="page-container">
        {pages[page]}
      </div>
    </>
  )
}

export default App
