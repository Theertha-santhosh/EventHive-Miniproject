import React, { FC } from 'react';
import Button from './Button';
import {Event} from '../types/event';

   interface TableRowProps {
    event: Event;
    deleteEvent: (id:number) => void;
}
const TableRow:FC<TableRowProps> = ({event, deleteEvent}) => {
    const handleDeleteEvent = () =>{
       deleteEvent(event.id);
    }
   return (
       <tr>
           <td>
               <img src={event.image} alt={event.name} />
           </td>
           <td>{event.name}</td>
           <td>{event.startDate}</td>
           <td>{event.time}</td>
           <td><span className={event.type === "Online" ? 'online' : 'offline'}>{event.type}</span></td>
          <td>
               <Button color="delete" onClick={handleDeleteEvent}>
                 <img width={38} src="/images/binnew.png" alt="delete-button"/>
                 </Button>
           </td>
       </tr>
   );
};

export default TableRow;