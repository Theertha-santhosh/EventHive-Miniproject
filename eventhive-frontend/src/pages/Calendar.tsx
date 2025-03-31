import { useState, useEffect } from "react";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createViewWeek, createViewMonthGrid } from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/index.css";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import "./Calendar.css";  // ✅ Add this line at the top


interface Event {
  id: number;
  title: string;
  start: string;
  end: string;
  description: string;
}

function Calendar() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Sample Event",
      start: "2025-05-05 10:00",
      end: "2025-05-05 12:00",
      description: "Sample event description",
    },
  ]);

  // ✅ Initialize the calendar
  const calendar = useCalendarApp({
    views: [createViewWeek(), createViewMonthGrid()],
    events: [],
    selectedDate: new Date().toISOString().split("T")[0], // ✅ Sets to today's date
    plugins: [createEventModalPlugin(), createDragAndDropPlugin()],
  });
  

  // ✅ Update calendar when events state changes
  useEffect(() => {
    if (calendar && calendar.events) {
      calendar.events.set(events); // Correct way to update events dynamically
    }
  }, [events, calendar]);

  // ✅ Function to handle adding an event
  const handleAddEvent = () => {
    const title = prompt("Enter event title:");
    if (!title) return;

    const date = prompt("Enter event date (YYYY-MM-DD):");
    if (!date) return;

    const description = prompt("Enter event description:");
    if (!description) return;

    const start = prompt("Enter event Start Time:");
    if (!start) return;

    const end = prompt("Enter event End Time:");
    if (!end) return;

    const newEvent: Event = {
      id: events.length + 1,
      title,
      start :`${date} ${start}`,
      end :`${date} ${end}`,
      description,
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]); // ✅ State updates
  };

  return (
    <div className="calendar-container">
      <div className="calendar-wrapper">
        <ScheduleXCalendar calendarApp={calendar} />
      </div>

      {/* ✅ Stylish Add Event Button at Bottom */}
      <div className="bottom-bar">
        <button className="add-event-button" onClick={handleAddEvent}>
          ➕ Add Event
        </button>
      </div>
    </div>
  );
}

export default Calendar;
