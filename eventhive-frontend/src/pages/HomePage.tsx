import React, { useState, FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "../components/EventCard";
import TableRow from "../components/TableRow";
import Button from "../components/Button";
import { Event } from "../types/event";
import "../assets/styles/style.css";

const HomePage: FC = () => {
    const navigate = useNavigate();

    const [events, setEvents] = useState<Event[]>([]); // Initialize as empty array

    const initialEvents: Event[] = [
        { id: 1, image: "/images/event1.png", name: "Python One Day Workshop", startDate: "15-03-2025", time: "09:00 am", type: "Offline" },
        { id: 2, image: "/images/event2.png", name: "Introduction To GitHub", startDate: "04-03-2025", time: "07:00 pm", type: "Online" },
        { id: 3, image: "/images/event3.png", name: "Introduction to Figma", startDate: "04-03-2025", time: "04:00 pm", type: "Offline" },
        { id: 4, image: "/images/event4.png", name: "App Development Workshop", startDate: "25-02-2025", time: "09:00 am", type: "Offline" },
        { id: 5, image: "/images/event5.png", name: "App Development Workshop", startDate: "25-02-2025", time: "09:00 am", type: "Offline" },
        { id: 6, image: "/images/event6.png", name: "App Development Workshop", startDate: "25-02-2025", time: "09:00 am", type: "Offline" },
    ];

    useEffect(() => {
        // Retrieve new event from local storage, if available
        const storedEvent = localStorage.getItem('newEvent');
        const newEvent = storedEvent ? JSON.parse(storedEvent) : null;

        // Combine initial events with the new event from local storage
        const allEvents = [...initialEvents];
        if (newEvent) {
            allEvents.unshift(newEvent); // Add new event to the beginning of the array
        }
        setEvents(allEvents);
    }, []);  // Empty dependency array ensures this runs only once on component mount


    const deleteEvent = (eventId: number) => {
        setEvents(events.filter((event) => event.id !== eventId));
    };

    const upcomingEvents = events.slice(0, 3); // Keep the first 3 events as upcoming
    const pastEvents = events.slice(3); // Keep the remaining events as past

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
                    {upcomingEvents.map((event) => ( // Map over upcomingEvents
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