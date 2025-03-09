import React, { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "../components/EventCard";
import TableRow from "../components/TableRow";
import Button from "../components/Button";
import { Event } from "../types/event";
import "../assets/styles/style.css";
import { useLocation } from 'react-router-dom';

const HomePage: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Retrieve new event from local storage, if available
    const storedEvent = localStorage.getItem('newEvent');
    const newEvent = storedEvent ? JSON.parse(storedEvent) : null;

    const initialEvents: Event[] = [
        { id: 1, image: "/images/event1.png", name: "Python One Day Workshop", startDate: "15-03-2025", time: "09:00 am", type: "Offline" },
        { id: 2, image: "/images/event2.png", name: "Introduction To GitHub", startDate: "04-03-2025", time: "07:00 pm", type: "Online" },
        { id: 3, image: "/images/event3.png", name: "Introduction to Figma", startDate: "04-03-2025", time: "04:00 pm", type: "Offline" },
        { id: 4, image: "/images/event4.png", name: "App Development Workshop", startDate: "25-02-2025", time: "09:00 am", type: "Offline" },
        
    ];

    const [events, setEvents] = useState<Event[]>([...initialEvents, ...(newEvent ? [newEvent] : [])]);

    const addEvent = (newEvent: Event) => {
        setEvents([...events, newEvent]);
    };

    const deleteEvent = (eventId: number) => {
        setEvents(events.filter((event) => event.id !== eventId));
    };

    const upcomingEvents = events.slice(0, 2);
    const pastEvents = events.slice(2);

    return (
        <div className="main-content">
            <div className="header">
                <h2 className="section-heading">Events</h2>

                <Button color="primary" onClick={() => navigate("/create-event")}>
                    Create an event
                </Button>
            </div>

            <div className="upcoming-section">
                <h2 className="section-heading">Upcoming</h2>
                <div className="event-container">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} deleteEvent={deleteEvent} />
                    ))}
                </div>
            </div>

            <div className="past-section">
                <h2 className="section-heading">Past Events</h2>
                <table className="event-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Event Name</th>
                            <th>Start Date</th>
                            <th>Time</th>
                            <th>Event Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pastEvents.map((event) => (
                            <TableRow key={event.id} event={event} deleteEvent={deleteEvent} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HomePage;