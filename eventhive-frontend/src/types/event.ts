// types/event.ts

export interface Event {
    id: number;
    image: string;
    name: string;
    startDate: string;
    time: string;
    type: 'Online' | 'Offline';
  }
  
  export interface CreateEventForm {
    name: string;
    startDate: string;
    time: string;
    categories:'Workshop' | 'Hackathon' | 'Talk Session' | 'Exhibition' | 'Quiz' | 'Bootcamp' | 'Contest' | 'Meetup' | 'Challenge' | 'Others';
    type: 'Online' | 'Offline'; // This dictates the type of event
    description?: string;   // Optional description
    endDate?: string;       // Optional end date
    registrationLink?: string; // Optional registration link
    poster: File | null;    // For uploading the image
    image: string;           // Base64 representation of the image (for preview)
  }