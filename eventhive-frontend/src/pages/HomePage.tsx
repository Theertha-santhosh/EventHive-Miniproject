import React,{useState, FC} from 'react';
import EventCard from '../components/EventCard';
import TableRow from '../components/TableRow';
 import Button from '../components/Button';
  import {Event} from '../types/event';

 const HomePage:FC = () => {
   const initialEvents: Event[] = [
      {
          id:1,
          image: '/images/event1.png',
          name: 'Python One Day Workshop',
          startDate: '15-03-2025',
          time: '09:00 am',
          type: 'Offline',
      },
      {
          id:2,
          image: '/images/event2.png',
          name: 'Introduction To GitHub',
          startDate: '04-03-2025',
          time: '07:00 pm',
          type: 'Online',
      },
        {
           id:3,
            image: '/images/event3.png',
            name: 'Introduction to Figma',
            startDate: '04-03-2025',
            time: '04:00 pm',
            type: 'Offline',
        },
         {
           id:4,
            image: '/images/event4.png',
            name: 'App Development Workshop',
            startDate: '25-02-2025',
            time: '09:00 am',
            type: 'Offline',
         },
         {
           id:5,
             image: '/images/event5.png',
             name: 'Easy EDA',
             startDate: '22-02-2025',
             time: '04:15 pm',
             type: 'Offline',
         },
         {
            id:6,
            image: '/images/event6.png',
            name: 'Introduction to Web Development',
            startDate: '15-02-2025',
            time: '07:00 pm',
            type: 'Online',
         }
  ];
  const [events, setEvents] = useState<Event[]>(initialEvents);
 const deleteEvent = (eventId:number) =>{
      const updatedEvent = events.filter((event) => event.id !== eventId);
       setEvents(updatedEvent);
 }
  const upcomingEvents = events.slice(0,2);
  const pastEvents = events.slice(2);
  return (
      <div className="main-content">
         <div className="flex-row">
             <h2 className="section-heading">Events</h2>
             <Button color="primary">Create an event</Button>
          </div>
        <div>
             <h2 className="section-heading">Upcoming</h2>
             <div className="event-container">
                   {upcomingEvents.map((event)=>(
                       <EventCard key={event.id} event={event} deleteEvent={deleteEvent}/>
                       ))}
             </div>
         </div>
         <div>
             <h2 className="section-heading">Past Events</h2>
              <table className="event-table">
                  <thead>
                      <tr>
                        <th>Image</th>
                        <th>Event Name</th>
                        <th>Start Date</th>
                        <th>Time</th>
                          <th>Event Type</th>
                        <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                    {pastEvents.map((event)=>(
                        <TableRow key={event.id} event={event} deleteEvent={deleteEvent}/>
                     ))}
                  </tbody>
               </table>
        </div>
    </div>
  );
};

export default HomePage;