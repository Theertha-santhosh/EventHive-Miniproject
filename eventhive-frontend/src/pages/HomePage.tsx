import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "../components/EventCard";
import TableRow from "../components/TableRow";
import Button from "../components/Button";
import { Event } from "../types/event";
import "../assets/styles/style.css";

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [events, setEvents] = useState<Event[]>([]);

    const initialEvents: Event[] = [
        { id: 1, image: "/images/event1.png", name: "Python One Day Workshop", startDate: "2025-04-10", time: "09:00 am", type: "Offline" },
        { id: 2, image: "/images/event2.png", name: "Introduction To GitHub", startDate: "2025-04-01", time: "07:00 pm", type: "Online" },
        { id: 3, image: "/images/event3.png", name: "Introduction to Figma", startDate: "2025-03-29", time: "04:00 pm", type: "Offline" },
        { id: 4, image: "/images/event4.png", name: "App Development Workshop", startDate: "2025-03-15", time: "09:00 am", type: "Offline" },
        { id: 5, image: "/images/event5.png", name: "React Workshop", startDate: "2025-04-15", time: "02:00 pm", type: "Online" },
        { id: 6, image: "/images/event6.png", name: "Django Workshop", startDate: "2025-03-10", time: "10:00 am", type: "Offline" },
    ];

    useEffect(() => {
        const storedEvent = localStorage.getItem('newEvent');
        const newEvent = storedEvent ? JSON.parse(storedEvent) : null;
    
        const allEvents = [...initialEvents]; // ✅ Use 'const' instead of 'let'
    
        if (newEvent) {
            allEvents.unshift(newEvent);
        }
    
        allEvents.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    
        setEvents(allEvents);
    }, []);
    

    const deleteEvent = (eventId: number) => {
        setEvents(events.filter((event) => event.id !== eventId));
    };

    const editEvent = (eventId: number) => {
        const eventToEdit = events.find((event) => event.id === eventId);
        if (eventToEdit) {
            // Open a form or navigate to an edit page (You can implement the actual edit logic)
            console.log("Editing event:", eventToEdit);
            navigate(`/edit-event/${eventId}`);
        }
    };

    const today = new Date().toISOString().split('T')[0];

    const upcomingEvents = events.filter(event => event.startDate >= today);
    const pastEvents = events.filter(event => event.startDate < today);

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
                    {upcomingEvents.map((event) => (
                        <EventCard key={event.id} event={event} deleteEvent={deleteEvent} editEvent={editEvent} />
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
