import React, { useState } from "react";
import { FaBullhorn, FaCalendarAlt, FaTrash } from "react-icons/fa"; 
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // ✅ Added arrow icons back
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faClock } from "@fortawesome/free-solid-svg-icons";
import './AnnouncementPage.css';
import { useNavigate } from 'react-router-dom';
import { useAnnouncementContext } from '../context/AnnouncementContext';

const AnnouncementPage: React.FC = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const navigate = useNavigate();
    const { announcements, deleteAnnouncement } = useAnnouncementContext();

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const handleCreateAnnouncementClick = () => {
        navigate('/create-announcement');
    };

    return (
        <div className="announcement-page-container">
            <div className="page-heading-container">
                <FaBullhorn className="page-heading-icon" />
                <h1 className="page-heading">Announcements</h1>
            </div>
            <div className="button-container">
                <button className="create-announcement-button" onClick={handleCreateAnnouncementClick}>
                    Create an announcement
                </button>
            </div>
            {announcements.map((announcement) => (
                <div key={announcement.id} className="announcement-card">
                    <div className="announcement-header">
                        <span className="announcement-icon">{announcement.icon || <FaBullhorn />}</span>
                        <div className="announcement-header-text">
                            <h2 className="announcement-title">{announcement.heading}</h2>
                            <div className="announcement-details-row">
                                <div className="detail-item">
                                    <FontAwesomeIcon icon={faInfoCircle} className="detail-icon" />
                                    <span>{announcement.type}</span>
                                </div>
                                <div className="detail-item">
                                    <FaCalendarAlt className="detail-icon" />
                                    <span>{announcement.expiringDate}</span>
                                </div>
                                <div className="detail-item">  
                                    <FontAwesomeIcon icon={faClock} className="detail-icon" />
                                    <span>{announcement.expiringTime}</span>  
                                </div>
                            </div>
                        </div>
                        <div className="header-buttons">
                            {/* ✅ Toggle See More/Less */}
                            <button className="expand-btn" onClick={() => toggleExpand(announcement.id)}>
                            {expandedId === announcement.id ? "See Less" : "See More"}
                            </button>

                            {/* ✅ Delete button */}
                            <button className="delete-btn" onClick={() => deleteAnnouncement(announcement.id)}>
                                <FaTrash className="delete-icon" />
                            </button>
                        </div>
                    </div>
                    
                    {/* ✅ Expandable details */}
                    {expandedId === announcement.id && (
                        <div className="announcement-details">
                            <p>{announcement.description}</p>
                            <p>
                                <strong>Registration Link: </strong>
                                <a href={announcement.registrationLink} target="_blank" rel="noopener noreferrer">
                                    {announcement.registrationLink}
                                </a>
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AnnouncementPage;
