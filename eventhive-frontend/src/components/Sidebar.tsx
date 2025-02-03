import React from 'react';
import {
    CalendarIcon,
    UsersIcon,
    ChatBubbleLeftRightIcon,
    SpeakerWaveIcon,
    ClipboardDocumentCheckIcon,
    Cog6ToothIcon,
    ArrowLeftOnRectangleIcon,
  } from '@heroicons/react/24/outline';
 import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
     <aside className="sidebar">
         <ul>
          <li>
            <NavLink to="/home">
                <ClipboardDocumentCheckIcon />
                Events
            </NavLink>
          </li>
          <li>
              <NavLink to="/community">
                  <UsersIcon />
                  Community members
              </NavLink>
          </li>
          <li>
               <NavLink to="/calendar">
                    <CalendarIcon />
                    Calendar
              </NavLink>
          </li>
         <li>
               <NavLink to="/community">
                  <ChatBubbleLeftRightIcon />
                  Community
             </NavLink>
          </li>
           <li>
               <NavLink to="/feedback">
                  <SpeakerWaveIcon />
                  Feedback
               </NavLink>
          </li>
           <li>
               <NavLink to="/announcement">
                 <ClipboardDocumentCheckIcon />
                 Announcement
               </NavLink>
          </li>
          <li>
            <NavLink to="/setting">
                <Cog6ToothIcon />
                Settings
            </NavLink>
          </li>
          <li>
               <NavLink to="/login">
                 <ArrowLeftOnRectangleIcon />
                  Logout
               </NavLink>
          </li>
        </ul>
    </aside>
  );
};

export default Sidebar;