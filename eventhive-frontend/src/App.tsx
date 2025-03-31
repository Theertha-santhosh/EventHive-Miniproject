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
import CommunitySettingsPage from './pages/CommunitySettingsPage';
import AnnouncementPage from './pages/AnnouncementPage'; // Import AnnouncementPage
import CreateAnnouncementPage from './pages/CreateAnnouncementPage'; // Import the new component
import { AnnouncementProvider } from './context/AnnouncementContext';
//import Calendar from './pages/Calendar'; 

import "./assets/styles/style.css";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <AnnouncementProvider>
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
                        path="/settings"
                        element={
                            isLoggedIn ? (
                                <Dashboard><SettingsPage /></Dashboard>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
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
                    <Route
                        path="/announcement"
                        element={
                            isLoggedIn ? (
                                <Dashboard><AnnouncementPage /></Dashboard>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        path="/create-announcement"
                        element={
                            isLoggedIn ? (
                                <Dashboard><CreateAnnouncementPage /></Dashboard>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />

                    {/*<Route
                        path="/calendar"
                        element={
                            isLoggedIn ? (
                                <Dashboard><Calendar /></Dashboard>
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />*/}

                    {/* Redirect to login if not authenticated */}
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
        </AnnouncementProvider>
    );
}

export default App;