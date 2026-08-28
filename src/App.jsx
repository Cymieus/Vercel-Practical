import { useState } from 'react';
import LandingPage from './pages/landing';
import SummaryPage from './pages/summary';
import './App.css';

function App() {
  const [page, setPage] = useState('landing');
  
  const [gadgets, setGadgets] = useState([
    { 
      id: 1, 
      name: 'Example Gadget', 
      category: 'Smartphone', 
      manufacturer: 'Example Manufacturer', 
      healthRating: 85, 
      brand: 'Example Brand', 
      role: 'Engineer/Tester' 
    }
  ]);

  const addGadget = (gadget) => {
    const newGadget = {
      ...gadget,
      id: gadgets.length + 1
    };
    setGadgets(prevGadgets => [...prevGadgets, newGadget]);
    setPage('summary');
  };

  const pages = {
    landing: <LandingPage onNavigate={setPage} addGadget={addGadget} />,
    summary: <SummaryPage onNavigate={setPage} gadgets={gadgets} /> 
  };

  return (
    <>
      <nav className="navbar">
        <button onClick={() => setPage('landing')} className={`text-2xl font-bold p-4 ${page === 'landing' ? 'text-violet-800' : 'text-gray-500 hover:text-violet-600'}`}>
          Home
        </button>
        <button onClick={() => setPage('summary')} className={`text-2xl font-bold p-4 ${page === 'summary' ? 'text-violet-800' : 'text-gray-500 hover:text-violet-600'}`}>
          Summary
        </button>
      </nav>
      <div className="page-container">
        {pages[page]}
      </div>
    </>
  );
}

export default App;