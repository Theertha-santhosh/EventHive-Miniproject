     // src/components/Sidebar.tsx
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
       import { HomeIcon } from '@heroicons/react/24/solid';

     const Sidebar: React.FC = () => {
         return (
             <aside className="sidebar">
                 <ul>
                     <li>
                         <NavLink
                             to="/home"
                             className={({ isActive }) => isActive ? 'active-link' : ''} // Added active-link class
                         >
                           <HomeIcon className="sidebar-icon" />
                             Events
                         </NavLink>
                     </li>
                     <li>
                         <NavLink
                             to="/community-members"
                             className={({ isActive }) => isActive ? 'active-link' : ''} // Added active-link class
                         >
                             <UsersIcon className="sidebar-icon" />
                             Community members
                         </NavLink>
                     </li>
                     <li>
                         <NavLink
                             to="/calendar"
                             className={({ isActive }) => isActive ? 'active-link' : ''} // Added active-link class
                         >
                             <CalendarIcon className="sidebar-icon" />
                             Calendar
                         </NavLink>
                     </li>
                     <li>
                         <NavLink
                             to="/community"
                             className={({ isActive }) => isActive ? 'active-link' : ''} // Added active-link class
                         >
                             <ChatBubbleLeftRightIcon className="sidebar-icon" />
                             Community
                         </NavLink>
                     </li>
                     <li>
                         <NavLink
                             to="/feedback"
                             className={({ isActive }) => isActive ? 'active-link' : ''} // Added active-link class
                         >
                             <SpeakerWaveIcon className="sidebar-icon" />
                             Feedback
                         </NavLink>
                     </li>
                     <li>
                         <NavLink
                             to="/announcement"
                             className={({ isActive }) => isActive ? 'active-link' : ''} // Added active-link class
                         >
                             <ClipboardDocumentCheckIcon className="sidebar-icon" />
                             Announcement
                         </NavLink>
                     </li>
                     <li>
                         <NavLink
                             to="/setting"
                             className={({ isActive }) => isActive ? 'active-link' : ''} // Added active-link class
                         >
                             <Cog6ToothIcon className="sidebar-icon" />
                             Settings
                         </NavLink>
                     </li>
                     <li>
                         <NavLink
                             to="/logout"
                             className={({ isActive }) => isActive ? 'active-link' : ''} // Added active-link class
                         >
                             <ArrowLeftOnRectangleIcon className="sidebar-icon" />
                             Logout
                         </NavLink>
                     </li>
                 </ul>
             </aside>
         );
     };

     export default Sidebar;