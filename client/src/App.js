import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Update from './components/Update';
import { BrowserRouter } from 'react-router-dom';
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    
    
    
    <div className='app'>
      <BrowserRouter>
      
          <Routes >

          <Route path="/" element={< Navigate to="/update" />} />
          <Route path="/login" element={<Home/>} />
          <Route path="/update" element={<Update/>} />

          </Routes>
      
      </BrowserRouter>


    </div>

  );
}

export default App;
