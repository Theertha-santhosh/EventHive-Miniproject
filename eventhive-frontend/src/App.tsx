// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './pages/HomePage';
import CommunityMembersPage from './pages/Membership';
import Dashboard from './components/Dashboard';
import "./assets/styles/style.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Protected routes - only accessible if logged in */}
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <Dashboard><HomePage /></Dashboard>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/community"
          element={
            isLoggedIn ? (
              <Dashboard><CommunityMembersPage /></Dashboard>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Redirect to login if not authenticated */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;