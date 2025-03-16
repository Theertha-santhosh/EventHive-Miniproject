import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CommunityPage.css'; // Import the CSS file

interface CoreTeamMember {
    name: string;
    role: string;
    image: string;
}

interface ContactInfo {
    phone: string[];
    email: string;
    instagram: string;
    linkedin: string;
    website: string;
}


const CommunityPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0); // Track active slide
    const imageList = [
        '/images/banner1.png',
        '/images/banner2.png',
        '/images/banner3.png',
    ]

    const bannerImages = [
        '/images/banner1.png',
        '/images/banner2.png',
        '/images/banner3.png',
    ];

    const aboutText = `TinkerHub Foundation is a non-profit initiative aimed at making use of 21st-century technologies and learning methods to
    foster a fresh breed of highly skilled young people empowered with technical and social skills. At TinkerHub, we assist
    students with experiential learning associated with innovation and entrepreneurship. More specifically, we help students learn
    as they advance and realize their own ideas and projects. Because we believe empowering the youth with the right technical
    and social skills is the growing need of the hour.`;

    const coreTeamData: CoreTeamMember[] = [
        { name: 'Indu T', role: 'Staff In Charge', image: '/images/person1.png' },
        { name: 'Amritha R', role: 'Campus Lead', image: '/images/person2.png' },
        { name: 'Theertha', role: 'Co-Lead', image: '/images/person3.png' },
        { name: 'Arun V', role: 'Co-Lead', image: '/images/person4.png' },
        { name: 'Mihikka S', role: 'Women In Tech Lead', image: '/images/person5.png' },
        { name: 'Sabari', role: 'Outreach Lead', image: '/images/person6.png' },
    ];

    const contactInfo: ContactInfo = {
        phone: ['96332 13564', '94465 62122'],
        email: 'tinkerhubnssce@gmail.com',
        instagram: 'tinkerhub_nssce',
        linkedin: 'tinkerhub_nssce',
        website: 'tinkerhub.org',
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerImages.length);
        }, 2000); // Change slide every 2 seconds

        return () => clearInterval(intervalId); // Clean up on unmount
      }, [bannerImages.length]);

    return (
        <div className="community-page">
            <div className="banner">
            <Carousel autoPlay={true} interval={4000} infiniteLoop={true} showThumbs={false}>
                    {bannerImages.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Banner ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>
            </div>

            <div className="about-section">
                <h2>About</h2>
                <p>{aboutText}</p>
            </div>

            <div className="core-team-section">
                <h2>Core Team</h2>
                <div className="core-team-grid">
                    {coreTeamData.map((member, index) => (
                        <div className="team-member" key={index}>
                            <img src={member.image} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="contact-section">
                <h2>Contact</h2>
                <p>Phone: {contactInfo.phone.join(', ')}</p>
                <p>Email: {contactInfo.email}</p>
                <p>Instagram: {contactInfo.instagram}</p>
                <p>LinkedIn: {contactInfo.linkedin}</p>
                <p>Website: {contactInfo.website}</p>
            </div>
        </div>
    );
};

export default CommunityPage;