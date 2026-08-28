import { useState } from 'react';

import LandingPage from './pages/landing';
import SummaryPage from './pages/summary';
import './App.css';

function App() {
  const [page, setPage] = useState('landing')

  const [gadgets, setGadgets] = useState([
    { id: 1, name: 'Example Gadget', category: 'Smartphone', manufacturer: 'Example Manufacturer', healthRating: 85, brand: 'Example Brand', role: 'Engineer/Tester' }
  ]);

  const addGadget = (gadget) => {
    setGadgets([...gadgets, { ...gadget, id: gadgets.length + 1 }]);
    setPage('summary');
  }

  const pages = {
    landing: <LandingPage onNavigate={setPage} addGadget={addGadget} />,
    summary: <SummaryPage onNavigate={setPage} gadgets={gadgets} /> 
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