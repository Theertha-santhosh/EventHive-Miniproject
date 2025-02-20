import React from "react";
import "../assets/styles/style.css";

const EventCard = ({ event, deleteEvent }) => {
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
        <img width={22} height={22} src="/images/binnew.png" alt="Delete" />
      </button>
      <button className="edit-button" onClick={() => editEvent(event.id)}>
        <img width={22} height={22} src="/images/editpen.png" alt="" />
      </button>
    </div>
  );
};

export default EventCard;
