// src/components/EventCard.tsx
import React from "react";
import "../assets/styles/style.css";

interface EventCardProps {
    event: {
        id: number;
        image: string;
        name: string;
        startDate: string;
        time: string;
        type: string;
    };
    deleteEvent: (eventId: number) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, deleteEvent }) => {
    return (
        <div className="event-card">
            <img src={event.image} alt={event.name} className="event-image" />
            <div className="event-details">
                <h3 className="event-title">{event.name}</h3>
                <p className="event-info">
                    <strong>Start Date:</strong> {event.startDate} <br />
                    <strong>Time:</strong> {event.time}
                </p>
                <span className={`event-type ${event.type.toLowerCase()}`}>
                    {event.type}
                </span>
            </div>
            <button className="delete-button" onClick={() => deleteEvent(event.id)}>
                <img width={38} height={38} src="/images/binnew.png" alt="Delete" />
            </button>
        </div>
    );
};

export default EventCard;