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
    editEvent: (eventId: number) => void;  // Function to handle editing
}

const EventCard: React.FC<EventCardProps> = ({ event, deleteEvent, editEvent }) => {
    return (
        <div className="event-card">
            <img 
                src={event.image} 
                alt={event.name} 
                className="event-image" 
                style={{ width: "144px", height: "81px", objectFit: "cover" }}
            />
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
            <div className="event-actions">
                {/* Edit Button */}
                <button className="edit-button" onClick={() => editEvent(event.id)}>
                    <img width={38} height={38} src="/images/editpen.png" alt="Edit" />
                </button>
                {/* Delete Button */}
                <button className="delete-button" onClick={() => deleteEvent(event.id)}>
                    <img width={38} height={38} src="/images/binnew.png" alt="Delete" />
                </button>
            </div>
        </div>
    );
};

export default EventCard;
