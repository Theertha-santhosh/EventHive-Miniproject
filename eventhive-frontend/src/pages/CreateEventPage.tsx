import React, { useState, FC } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Event, CreateEventForm } from '../types/event'; // Import both interfaces

// Styled Components (no changes here)
const PageContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f7fa;
  padding: 20px;
`;

const ContentArea = styled.div`
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #e9ecef;
  border-radius: 5px;
  font-size: 14px;
  color: #333;

  &:focus {
    outline: none;
    border-color: #4285f4;
  }
`;

const FormTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #e9ecef;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4285f4;
  }
`;

const EventTypeOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const EventTypeButton = styled.button`
  background-color: #f5f7fa;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  color: #333;
  font-size: 14px;

  &:hover {
    background-color: #e9ecef;
  }

  &.active {
    background-color: #4285f4;
    color: #fff;
  }
`;

const DateInputContainer = styled.div`
  display: flex;
  gap: 20px;

  & > div {
    flex: 1;
  }
`;

const ModeOfEventOptions = styled.div`
  display: flex;
  gap: 10px;
`;

const ModeOfEventButton = styled.button`
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &.offline {
    background-color: #f8d7da;
    color: #721c24;
  }

  &.online {
    background-color: #d4edda;
    color: #155724;
  }

  &.active {
    color: white;
  }
`;

const FileInput = styled.input`
    opacity: 0;           /* Make it fully transparent */
    width: 100%;         /* Take full width of parent */
    height: 100%;        /* Take full height of parent */
    position: absolute;   /* Needed for absolute positioning of FileInput */
    top: 0;
    left: 0;
    cursor: pointer;       /* Change cursor to indicate it's clickable */
`;

const PosterDropArea = styled.div`
    border: 2px dashed #e9ecef;
    border-radius: 5px;
    padding: 20px; /* Reduced padding */
    text-align: center;
    color: #777;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 150px;
    position: relative;     /* Needed for absolute positioning of FileInput */
    overflow: hidden;       /* Prevent FileInput from overflowing */

    &:hover {
        background-color: #f5f7fa;
    }

    svg {
        margin-bottom: 10px;
    }
`;

const SubmitButton = styled.button`
  background-color: #4285f4;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  align-self: center;

  &:hover {
    background-color: #3367d6;
  }
`;

const ImagePreview = styled.img`
    max-width: 100%;
    max-height: 150px;
    object-fit: contain;
    margin-bottom: 10px;
`;

interface CreateEventPageProps { // To receive the addEvent function
  addEvent?: (event: Event) => void;
}

// Component
const CreateEventPage: FC<CreateEventPageProps> = () => {
    const navigate = useNavigate();
    const [eventData, setEventData] = useState<CreateEventForm>({ // Use CreateEventForm
        name: "",
        startDate: "",
        time: "",
        categories: "Workshop",
        type: "Offline",
        description: "",
        endDate: "",
        registrationLink: "",
        poster: null,
        image: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleCategoryClick = (category: 'Workshop' | 'Hackathon' | 'Talk Session' | 'Exhibition' | 'Quiz' | 'Bootcamp' | 'Contest' | 'Meetup' | 'Challenge' | 'Others') => {
        setEventData({ ...eventData, categories: category });
    };

    const handleTypeChange = (type: 'Online' | 'Offline') => {
        setEventData({ ...eventData, type: type });
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventData({ ...eventData, time: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setEventData({ ...eventData, poster: file, image: imageUrl });
        }
    };

    const formatTime = (time24: string): string => {
        const [hours, minutes] = time24.split(':');
        let hoursInt = parseInt(hours, 10);
        const ampm = hoursInt >= 12 ? 'PM' : 'AM';
        hoursInt = hoursInt % 12;
        hoursInt = hoursInt ? hoursInt : 12; // the hour '0' should be '12'
        return `${hoursInt}:${minutes} ${ampm}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newEventId = Date.now();

        if (eventData.poster) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                const newEvent: Event = {
                    id: newEventId,
                    image: base64String,
                    name: eventData.name,
                    startDate: eventData.startDate,
                    time: formatTime(eventData.time), // Format the time here
                    type: eventData.type,
                };
                localStorage.setItem('newEvent', JSON.stringify(newEvent));
                navigate("/home");
            };
            reader.readAsDataURL(eventData.poster);
        } else {
            const newEvent: Event = {
                id: newEventId,
                image: "",
                name: eventData.name,
                startDate: eventData.startDate,
                time: formatTime(eventData.time), // Format the time here
                type: eventData.type,
            };
            localStorage.setItem('newEvent', JSON.stringify(newEvent));
            navigate("/home");
        }
    };

  const categoryOptions = [
    "Workshop",
    "Hackathon",
    "Talk Session",
    "Exhibition",
    "Quiz",
    "Bootcamp",
    "Contest",
    "Meetup",
    "Challenge",
    "Others"
  ];

  return (
    <PageContainer>
      <ContentArea>
        <Card>
          <FormTitle>Create an Event</FormTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel>Event Name:</FormLabel>
              <FormInput
                type="text"
                name="name"
                value={eventData.name}
                onChange={handleChange}
                placeholder="Name of the event"
                required
              />
            </FormGroup>
             <FormGroup>
              <FormLabel>Event Category:</FormLabel>
              <EventTypeOptions>
                {categoryOptions.map((category) => (
                  <EventTypeButton
                    key={category}
                    className={eventData.categories === category ? "active" : ""}
                    onClick={() => handleCategoryClick(category as 'Workshop' | 'Hackathon' | 'Talk Session' | 'Exhibition' | 'Quiz' | 'Bootcamp' | 'Contest' | 'Meetup' | 'Challenge' | 'Others')}
                    type="button"
                  >
                    {category}
                  </EventTypeButton>
                ))}
              </EventTypeOptions>
            </FormGroup>
            <FormGroup>
              <FormLabel>Event Type:</FormLabel>
              <ModeOfEventOptions>
                <ModeOfEventButton
                  className={`offline ${eventData.type === "Offline" ? "active" : ""}`}
                  onClick={() => handleTypeChange("Offline")}
                  type="button"
                >
                  Offline
                </ModeOfEventButton>
                <ModeOfEventButton
                  className={`online ${eventData.type === "Online" ? "active" : ""}`}
                  onClick={() => handleTypeChange("Online")}
                  type="button"
                >
                  Online
                </ModeOfEventButton>
              </ModeOfEventOptions>
            </FormGroup>

             <FormGroup>
                <FormLabel>Time:</FormLabel>
                <FormInput
                    type="time"
                    name="time"
                    value={eventData.time}
                    onChange={handleTimeChange}
                    required
                />
            </FormGroup>

            <DateInputContainer>
              <FormGroup>
                <FormLabel>Starting On:</FormLabel>
                <FormInput
                  type="date"
                  name="startDate"
                  value={eventData.startDate}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Ending On:</FormLabel>
                <FormInput
                  type="date"
                  name="endDate"
                  value={eventData.endDate}
                  onChange={handleChange}
                />
              </FormGroup>
            </DateInputContainer>

            <FormGroup>
              <FormLabel>Event Description:</FormLabel>
              <FormTextArea
                name="description"
                value={eventData.description}
                onChange={handleChange}
                placeholder="Add a description..."
                required
              />
            </FormGroup>



            <FormGroup>
              <FormLabel>Registration Link:</FormLabel>
              <FormInput
                type="url"
                name="registrationLink"
                value={eventData.registrationLink}
                onChange={handleChange}
                placeholder="Enter registration link"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Poster:</FormLabel>
              <PosterDropArea>
                {eventData.image ? (
                  <ImagePreview src={eventData.image} alt="Event Poster" />
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      <path d="M1.002 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-14zm15 1a.993.993 0 0 0-.993.992l-.5 8.008H1.493A.992.992 0 0 0 1.002 9V2a.993.993 0 0 0 .993-.992h12.016a.993.993 0 0 0 .991.992v.008z" />
                    </svg>
                    Drop photo here
                  </>
                )}
                <FileInput
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </PosterDropArea>
            </FormGroup>

            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </Card>
      </ContentArea>
    </PageContainer>
  );
};

export default CreateEventPage;