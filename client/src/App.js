import './App.css';
import Home from './components/Home';
import AddData from './components/AddData';

import { BrowserRouter } from 'react-router-dom';
import { Navigate, Route, Routes } from "react-router-dom";
import Update from './components/Update';

function App() {
  return (
    
    
    
    <div className='app'>
      <BrowserRouter>
      
          <Routes >

          <Route path="/" element={< Navigate to="/home" />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/add" element={<AddData/>} />
          <Route path="/update/:id" element={<Update/>} />

          </Routes>
      
      </BrowserRouter>


    </div>

  );
}

export default App;
