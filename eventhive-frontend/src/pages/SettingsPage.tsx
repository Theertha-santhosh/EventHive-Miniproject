// src/pages/SettingsPage.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SettingsPage.css';

const SettingsPage: React.FC = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };

    const whatsappLink = "https://wa.me/7025419603";

    const [showTerms, setShowTerms] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

    const handleTermsClick = () => {
        setShowTerms(!showTerms);
    };

    const handlePrivacyClick = () => {
        setShowPrivacy(!showPrivacy);
    };

    return (
        <div className="settings-container">
            <div className="main-content">
                <div className="header">
                    <button className="back-button" onClick={handleBackClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32L109.2 224 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                    </button>
                    <button className="more-options-button">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 192 512"><path d="M96 160c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zM96 416c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zM96 96c17.7 0 32-14.3 32-32S113.7 32 96 32S64 46.3 64 64s14.3 32 32 32zm0 320c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/></svg>
                    </button>
                </div>
                <h1 className="title">Settings</h1>

                <div className="menu-item">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="feedback-link">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 16.1 11.2 25.7 11.2s18.1-4.2 25.7-11.2L464.4 300.4c30.4-28.3 47.6-68 0-108.5-47.6-40.2-130.8-40.2-178.4 0l-58.6 54.6c-4.7 4.4-12.5 4.4-17.2 0l-58.6-54.6c-47.6-40.2-130.8-40.2-178.4 0-47.6 40.5-30.4 80.2 0 108.5zM256 51.7l76.6 71.5L256 209.1 179.4 123.2 256 51.7zM348.3 271.5L256 364.8l-92.3-93.3L125.7 325.9 256 456.4l130.3-130.5L348.3 271.5z"/></svg>
                        <span className="menu-text">Got a feedback? Talk to us</span>
                    </a>
                </div>

                <div className="menu-item">
                    {/* Link to /community-settings */}
                    <Link to="/community-settings" className="feedback-link">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                        <span className="menu-text">Communities</span>
                    </Link>
                </div>

                <div className="menu-item" onClick={handleTermsClick}>
                    <span className="feedback-link">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM112 272c-26.5 0-48 21.5-48 48s21.5 48 48 48H400c26.5 0 48-21.5 48-48s-21.5-48-48-48H112zM112 144c-26.5 0-48 21.5-48 48s21.5 48 48 48H400c26.5 0 48-21.5 48-48s-21.5-48-48-48H112z"/></svg>
                        <span className="menu-text">Terms and conditions</span>
                    </span>
                </div>

                {showTerms && (
                    <div className="terms-content">
                      <h3>Terms and Conditions</h3>
                      <p>Welcome to <b>EventHive</b>, a centralized platform designed to streamline campus event management, enhance communication, and improve collaboration among students, faculty, and organizations. By accessing and using EventHive, you agree to comply with the following terms and conditions:</p>

                      <h4><b>1. User Responsibilities</b></h4>
                      <ul>
                          <li>Users must provide accurate and updated information during registration.</li>
                          <li>All interactions, event postings, and communications must align with the institution's guidelines and policies.</li>
                          <li>Misuse of the platform, including spreading false information, spamming, or unauthorized promotions, is strictly prohibited.</li>
                      </ul>

                      <h4><b>2. Event Management & Participation</b></h4>
                      <ul>
                          <li>Event organizers are responsible for providing clear and accurate event details, including time, venue, and registration requirements.</li>
                          <li>Users must adhere to the event participation guidelines set by organizers and administrative authorities.</li>
                          <li>Venue booking requests are subject to approval by the institution, and users must respect booking policies.</li>
                      </ul>

                      <h4><b>3. Data Privacy & Security</b></h4>
                      <ul>
                          <li>EventHive ensures the protection of user data in accordance with institutional privacy policies.</li>
                          <li>Personal information will only be used for platform-related activities and will not be shared with third parties without consent.</li>
                          <li>Users are responsible for maintaining the confidentiality of their login credentials.</li>
                      </ul>

                      <h4><b>4. Code of Conduct</b></h4>
                      <ul>
                          <li>Users must engage respectfully in discussions, feedback, and interactions within the platform.</li>
                          <li>Harassment, discrimination, or inappropriate content will result in immediate action, including account suspension.</li>
                          <li>Any violation of community guidelines will be reported to the institution for necessary action.</li>
                      </ul>

                      <h4><b>5. Platform Usage & Restrictions</b></h4>
                      <ul>
                          <li>EventHive is intended solely for academic and extracurricular event coordination within the institution.</li>
                          <li>Unauthorized commercial use or third-party promotions are not permitted without prior approval.</li>
                          <li>The institution reserves the right to modify or restrict access to features if misuse is detected.</li>
                      </ul>

                      <h4><b>6. Liability & Disclaimer</b></h4>
                      <ul>
                          <li>EventHive acts as a facilitator for event management and communication; it does not take responsibility for any disputes or miscommunication between users.</li>
                          <li>The institution reserves the right to update these terms and conditions as needed. Continued usage of the platform implies acceptance of any modifications.</li>
                      </ul>

                      <p>By using <b>EventHive</b>, you acknowledge that you have read, understood, and agreed to these terms. For any concerns or queries, please contact the administration.</p>
                    </div>
                )}

                <div className="menu-item" onClick={handlePrivacyClick}>
                    <span className="feedback-link">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-36.5-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h64c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64zM368 448V256H80V448H368z"/></svg>
                        <span className="menu-text">Privacy policy</span>
                    </span>
                </div>

                {showPrivacy && (
                    <div className="privacy-content">
                    <h3>Privacy Policy</h3>

                    <p><b>Effective Date:</b> 16/03/2025<br/>
                    <b>Last Updated:</b> 24/03/2025</p>

                    <p>Welcome to <b>EventHive</b>, a platform designed to enhance campus event management and community engagement. This Privacy Policy explains how we collect, use, store, and protect your personal information while using our services. By accessing and using EventHive, you agree to the terms outlined in this policy.</p>

                    <h4><b>1. Information We Collect</b></h4>
                    <p>We collect the following types of information to improve user experience and ensure the platform’s functionality:</p>

                    <h5><b>1.1 Personal Information</b></h5>
                    <ul>
                        <li>Name, email address, and institutional ID (collected during registration).</li>
                        <li>Profile details such as role (student, faculty, staff) and event participation history.</li>
                        <li>Contact information for communication and notifications.</li>
                    </ul>

                    <h5><b>1.2 Usage Data</b></h5>
                    <ul>
                        <li>Event interactions, preferences, and feedback submissions.</li>
                        <li>Login activity, IP address, and browser details for security monitoring.</li>
                        <li>Venue booking requests and approvals.</li>
                    </ul>

                    <h5><b>1.3 Cookies & Tracking Technologies</b></h5>
                    <ul>
                        <li>EventHive may use cookies to enhance functionality and remember user preferences.</li>
                        <li>Users can control cookie settings through their browser preferences.</li>
                    </ul>

                    <h4><b>2. How We Use Your Information</b></h4>
                    <p>The collected data is used for the following purposes:</p>
                    <ul>
                        <li><b>Platform Functionality:</b> To facilitate event creation, discovery, and participation.</li>
                        <li><b>Communication & Notifications:</b> To provide updates on events, venue approvals, and platform announcements.</li>
                        <li><b>Security & Fraud Prevention:</b> To detect and prevent unauthorized access or misuse of the platform.</li>
                        <li><b>User Experience Enhancement:</b> To personalize event recommendations and improve platform usability.</li>
                        <li><b>Analytics & Reporting:</b> To generate insights for administrators to improve event planning and participation.</li>
                    </ul>

                    <h4><b>3. Data Sharing & Disclosure</b></h4>
                    <ul>
                        <li>We do <b>not</b> sell or share your personal information with third parties for commercial purposes.</li>
                        <li>Data may be shared with <b>institutional administrators</b> for event management and reporting.</li>
                        <li>Personal data will only be disclosed when required by <b>law, security concerns, or policy enforcement</b>.</li>
                    </ul>

                    <h4><b>4. Data Security</b></h4>
                    <p>We implement appropriate security measures to protect user information:</p>
                    <ul>
                        <li><b>Encryption & Secure Storage:</b> Data is stored securely with encryption where applicable.</li>
                        <li><b>Access Control:</b> Only authorized personnel can access sensitive data.</li>
                        <li><b>Regular Audits:</b> The platform undergoes security reviews to identify and mitigate risks.</li>
                    </ul>
                    <p>However, no online system is 100% secure. Users are encouraged to protect their login credentials and report suspicious activities.</p>

                    <h4><b>5. User Rights & Choices</b></h4>
                    <p>Users have the following rights regarding their data:</p>
                    <ul>
                        <li><b>Access & Review:</b> Users can view and update their personal information.</li>
                        <li><b>Opt-Out:</b> Users can modify notification preferences and restrict certain data usage.</li>
                        <li><b>Data Deletion:</b> Users can request account deletion, subject to institutional policies.</li>
                    </ul>
                    <p>For any data-related concerns, users can contact the administration at <b>[Insert Contact Email]</b>.</p>

                    <h4><b>6. Changes to This Policy</b></h4>
                    <p>We may update this Privacy Policy to reflect improvements or regulatory changes. Users will be notified of significant updates. Continued use of <b>EventHive</b> implies acceptance of the revised policy.</p>

                    <h4><b>7. Contact Us</b></h4>
                    <p>For any privacy-related questions or concerns, please reach out to:</p>
                    <p>📧 <b>Email:</b> eventhive@gmail.com <br/>
                       🏢 <b>Institution Address:</b> Nss College of Engineering,Palakkad </p>

                    <p>By using <b>EventHive</b>, you acknowledge and agree to the terms of this Privacy Policy.</p>
                </div>
                )}
              
            </div>

        </div>
    );
};

export default SettingsPage;