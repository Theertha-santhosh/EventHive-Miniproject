// src/App.tsx
import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import Login from './components/Login';
import CommunityMembersPage from './pages/Membership';
import Dashboard from './components/Dashboard';
import CreateEventPage from './pages/CreateEventPage';
import Feedback from './pages/Feedback';
import HomePage from './pages/HomePage';
import CommunityPage from './pages/CommunityPage';
import SettingsPage from './pages/SettingsPage';
import CommunitySettingsPage from './pages/CommunitySettingsPage'; // Import CommunitySettingsPage

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
                    path="/community-members"
                    element={
                        isLoggedIn ? (
                            <Dashboard><CommunityMembersPage /></Dashboard>
                        ) : ( 
                            <Navigate to="/login" />
                        )
                    }
                />
                
                <Route
                    path="/setting"
                    element={
                        isLoggedIn ? (
                            <Dashboard><SettingsPage /></Dashboard>
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />

                {/* Add CommunitySettingsPage as a separate route */}
                <Route
                    path="/community-settings"
                    element={
                        isLoggedIn ? (
                            <Dashboard><CommunitySettingsPage /></Dashboard>
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />

                {/* Other routes */}
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
                {/* Add other routes here */}
                <Route
                    path="/create-event"
                    element={
                        isLoggedIn ? (
                            <Dashboard><CreateEventPage /></Dashboard>
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/feedback"
                    element={
                        isLoggedIn ? (
                            <Dashboard><Feedback /></Dashboard>
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/community"
                    element={
                        isLoggedIn ? (
                            <Dashboard><CommunityPage /></Dashboard>
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