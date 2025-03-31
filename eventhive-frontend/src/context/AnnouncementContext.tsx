import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Announcement } from '../types/announcement';
import { FaBullhorn } from "react-icons/fa";
import { MdSportsTennis } from "react-icons/md";

interface AnnouncementContextProps {
    announcements: Announcement[];
    addAnnouncement: (announcement: Announcement) => void;
    deleteAnnouncement: (id: number) => void;  // ✅ Added delete function
}

const AnnouncementContext = createContext<AnnouncementContextProps | undefined>(undefined);

interface AnnouncementProviderProps {
    children: ReactNode;
}

// **Fixed announcements (Hack-a-Prob & Racket Rumble)**
const fixedAnnouncements: Announcement[] = [
    {
        id: 1,
        heading: "Hack-a-Prob - 24-Hour National Level Hackathon",
        type: "Hackathon",
        organizedBy: "Tech Club",
        expiringDate: "27 March 2025",
        expiringTime: "23:59",
        description: "Hack-a-Prob is an intense 24-hour national-level hackathon designed to challenge the brightest minds in problem-solving and innovation. Participants will work in teams to develop cutting-edge solutions in domains like AI, Blockchain, and Sustainability.",
        registrationLink: "https://example.com/register",
        icon: <FaBullhorn />,
    },
    {
        id: 2,
        heading: "Racket Rumble 2025 – Intra-College Badminton Championship",
        type: "Sports",
        organizedBy: "Physical Education Department",
        expiringDate: "29 March 2025",
        expiringTime: "18:00",
        description: "The Physical Education Department, in association with Badminton NSSCE, is thrilled to announce Racket Rumble 2025, an electrifying intra-college badminton tournament!",
        registrationLink: "https://example.com/register",
        icon: <MdSportsTennis />,
    }
];

export const AnnouncementProvider: React.FC<AnnouncementProviderProps> = ({ children }) => {
    const [userAnnouncements, setUserAnnouncements] = useState<Announcement[]>(() => {
        const storedAnnouncements = localStorage.getItem('userAnnouncements');
        return storedAnnouncements ? JSON.parse(storedAnnouncements) : [];
    });

    useEffect(() => {
        localStorage.setItem('userAnnouncements', JSON.stringify(userAnnouncements));
    }, [userAnnouncements]);

    const addAnnouncement = (announcement: Announcement) => {
        setUserAnnouncements((prev) => [...prev, announcement]);
    };

    const deleteAnnouncement = (id: number) => {
        setUserAnnouncements((prev) => prev.filter(announcement => announcement.id !== id));
    };

    return (
        <AnnouncementContext.Provider value={{ announcements: [...fixedAnnouncements, ...userAnnouncements], addAnnouncement, deleteAnnouncement }}>
            {children}
        </AnnouncementContext.Provider>
    );
};

export const useAnnouncementContext = () => {
    const context = React.useContext(AnnouncementContext);
    if (!context) {
        throw new Error('useAnnouncementContext must be used within an AnnouncementProvider');
    }
    return context;
};
