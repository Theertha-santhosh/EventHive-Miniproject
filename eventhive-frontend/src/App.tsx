import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import HomePage from './pages/HomePage';
import "./assets/styles/style.css";

function App() {
  return (
    <Router>
       <Routes>
        <Route path="/login" element={<Login />} />
         <Route path="/home" element={<Dashboard><HomePage/></Dashboard>} />
       <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;