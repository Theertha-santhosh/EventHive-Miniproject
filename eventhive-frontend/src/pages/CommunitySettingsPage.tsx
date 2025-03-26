// src/pages/CommunitySettingsPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CommunitySettingsPage.css';

interface Community {
    name: string;
    description: string;
}

const CommunitySettingsPage: React.FC = () => {
    const [expandedCommunity, setExpandedCommunity] = useState<string | null>(null);
    const navigate = useNavigate();

    const communities: Community[] = [
         {
            name: 'IEEE Student Branch NSSCE',
            description: `The IEEE Student Branch at NSS College of Engineering, Palakkad, is a dynamic and vibrant technical community that fosters innovation, research, and collaboration among students. As part of the global IEEE network, the branch provides a platform for students to engage in cutting-edge technological advancements, skill-building workshops, and industry exposure. With active participation in various technical domains, including artificial intelligence, robotics, embedded systems, and software development, IEEE NSSCE empowers students to enhance their professional and technical expertise. The branch regularly organizes hackathons, coding competitions, expert talks, and hands-on workshops to bridge the gap between academic learning and real-world applications.

            Beyond technical pursuits, IEEE NSSCE focuses on leadership development and community engagement. Through initiatives like IEEE Computer Society, IEEE Women in Engineering (WIE), and IEEE Signal Processing Society, students get opportunities to collaborate on interdisciplinary projects, contribute to open-source initiatives, and develop problem-solving skills. The branch also actively participates in IEEE Xtreme, project expos, and conferences, encouraging students to showcase their innovations on national and international platforms. With a commitment to fostering a culture of learning and growth, IEEE NSSCE continues to inspire students to push technological boundaries and make meaningful contributions to society. 🚀✨`
        },
        {
            name: 'TinkerHub  ',
            description: ' TinkerHub is a community-driven initiative focused on fostering a culture of learning, innovation, and collaboration in technology. We provide a platform for students and tech enthusiasts to explore emerging technologies, work on hands-on projects, participate in hackathons, and engage in peer-to-peer learning. Our mission is to bridge the gap between academia and industry by equipping members with practical skills in coding, AI, open-source development, and entrepreneurship. 🚀✨',
        },

        {
            name: 'Debate Society',
            description: `The Debate Society at NSS College of Engineering is a dynamic platform where students can sharpen their critical thinking and public speaking skills. Through structured debates, panel discussions, and extempore competitions, the society fosters a culture of intellectual engagement. Members are encouraged to research contemporary issues, analyze different perspectives, and construct well-reasoned arguments. Regular practice sessions and mentorship from experienced debaters help students improve their articulation, confidence, and persuasive abilities. The society also collaborates with other institutions for intercollegiate debates, providing members with exposure to diverse viewpoints and competitive debating environments.

            Beyond competitions, the Debate Society actively contributes to campus discourse by organizing public speaking workshops, guest lectures, and discussion forums on pressing global and national topics. It aims to instill in students the ability to think independently, express ideas effectively, and engage in meaningful discussions. The society serves as a breeding ground for future leaders, policy-makers, and influencers by fostering logical reasoning, diplomacy, and respectful argumentation. With its emphasis on informed dialogue and intellectual rigor, the Debate Society plays a vital role in the holistic development of students.`
        },


        {
            name: 'Photography Club',
            description: `The Photography Club at NSS College of Engineering is a vibrant community for students passionate about capturing moments and telling stories through visuals. The club provides a creative space for both amateur and experienced photographers to learn, explore, and enhance their skills. Through workshops on composition, lighting, and post-processing, members gain hands-on experience in various aspects of photography. The club frequently organizes photo walks, theme-based contests, and exhibitions, encouraging students to experiment with different styles, from portrait and landscape photography to street and wildlife photography.

            In addition to individual creative pursuits, the Photography Club plays a crucial role in covering major campus events, festivals, and student activities. Members contribute to college magazines, social media pages, and newsletters, providing high-quality visual documentation of important moments. The club also collaborates with other societies to create compelling visual content that enhances event promotion and engagement. By fostering creativity, teamwork, and technical expertise, the Photography Club serves as a hub for aspiring photographers to refine their craft and showcase their artistic vision.`
        },
        {
            name: 'STACS (Society for Technically Advanced Computer Science)',
            description: `TThe STACS Club at NSS College of Engineering is an exclusive student-driven community dedicated to fostering innovation and technical excellence among Computer Science students. The club serves as a hub for knowledge-sharing and skill development in various domains, including programming, artificial intelligence, cybersecurity, and software development. STACS regularly organizes coding contests, hackathons, and technical workshops to equip students with hands-on experience in emerging technologies. Through peer learning sessions, members collaborate on projects, participate in industry-driven challenges, and engage with professionals through guest lectures and tech meetups.

        Beyond technical expertise, STACS emphasizes problem-solving, teamwork, and industry readiness. The club encourages students to take part in national and international coding competitions, promoting a culture of continuous learning and excellence. It also provides guidance on career development, including interview preparation, resume building, and networking opportunities with alumni in the tech industry. By bridging the gap between academia and industry, STACS empowers students to stay ahead in the rapidly evolving field of Computer Science and prepares them for successful careers in technology.`
        },
        {
            name: 'IETE (Institution of Electronics and Telecommunication Engineers) Student Chapter',
            description: `The IETE Student Chapter at NSS College of Engineering serves as a platform for students interested in electronics, communication, and related fields to enhance their technical and research skills. Affiliated with the national body of IETE, the chapter provides students with access to a vast network of professionals, research opportunities, and technical resources. It organizes workshops, technical talks, and hands-on sessions in areas such as embedded systems, wireless communication, IoT, and robotics. These initiatives help students bridge the gap between theoretical knowledge and practical applications, fostering innovation and technical proficiency.

            In addition to technical training, the IETE Student Chapter promotes industry-academia interaction through industrial visits, expert lectures, and collaborative projects. Students have the opportunity to present research papers, participate in design competitions, and gain insights into the latest advancements in electronics and telecommunication. The chapter also encourages interdisciplinary learning by working with other technical clubs on campus. Through mentorship, networking, and skill-building activities, IETE aims to create a strong foundation for students aspiring to build careers in electronics, telecommunication, and related industries.`
        },
        {
            name: 'ISTE (Indian Society for Technical Education) Student Chapter',
            description: `The ISTE Student Chapter at NSS College of Engineering is a vibrant community dedicated to the professional and technical development of students. As part of the larger ISTE network, the chapter focuses on enhancing students' engineering and leadership skills through technical workshops, industry interaction sessions, and skill development programs. Regular events such as coding competitions, project expos, and expert lectures provide students with opportunities to work on real-world problems and develop innovative solutions. ISTE also plays a key role in organizing faculty development programs and student-industry mentorship programs to ensure holistic technical education.

        Apart from technical enrichment, the ISTE Student Chapter fosters teamwork, creativity, and research-oriented thinking among students. It encourages participation in national-level competitions and conferences, allowing students to showcase their talents and network with industry professionals. The chapter serves as a bridge between academia and industry by keeping students updated on technological advancements, career trends, and professional ethics. By nurturing a culture of continuous learning and innovation, ISTE prepares students to become competent engineers and technologists ready to tackle future challenges.`
        },
    ];


    const toggleCommunity = (name: string) => {
        setExpandedCommunity(expandedCommunity === name ? null : name);
    };

    

    const handleBackClick = () => {
        navigate('/settings'); // Navigate back to SettingsPage
    };

    return (
        <div className="community-settings-container">
            <div className="back-to-settings">
                <button className="back-button" onClick={handleBackClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32L109.2 224 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg> Back to Settings
                </button>
            </div>
            <ul className="community-list">
                {communities.map((community) => (
                    <li key={community.name} className="community-item">
                       <button
                            className={`community-name-button ${expandedCommunity === community.name ? 'active' : ''}`}
                            onClick={() => toggleCommunity(community.name)}
                        >
                            {community.name}
                            <span className="dropdown-arrow">
                                {expandedCommunity === community.name ? '▲' : '▼'}
                            </span>
                        </button>
                        {expandedCommunity === community.name && (
                            <div className="community-description">
                               {community.description.split('\n\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommunitySettingsPage;