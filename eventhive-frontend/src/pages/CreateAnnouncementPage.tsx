import React, { useState, FC } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAnnouncementContext } from '../context/AnnouncementContext'; // Import the context hook
import { CreateAnnouncementForm, Announcement } from '../types/announcement'; // Import the Announcement interface

// Styled Components (as per image)
const OuterContainer = styled.div`
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    min-height: 100vh; /* Take up the whole viewport height */
    background-color: #f5f7fa;
`;

const PageContainer = styled.div`
    display: flex;
    width: 90%; /* Occupy a large part of the screen */
    max-width: 1200px; /* Ensure it doesn't get too wide */
    min-height: 80vh; /* occupy good amount of vertical space */
    background-color: #f5f7fa;
    padding: 20px;
`;

const ContentArea = styled.div`
    flex: 1;
    max-width: 100%;
    margin: 0 auto;
`;

const Card = styled.div`
    background-color: #e6e6fa; /* Light Purple background */
    border-radius: 10px;
    padding: 30px; /* Increased padding for larger feel */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Slightly increased shadow */
`;

const FormTitle = styled.h2`
    font-size: 32px; /* Bigger title */
    font-weight: 600;
    text-align: left; /* Adjusted alignment */
    margin-bottom: 30px; /* More space below the title */
    color: #333;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px; /* More spacing between form groups */
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

const FormLabel = styled.label`
    font-size: 16px;
    color: #333;
    margin-bottom: 8px;
`;

const FormInput = styled.input`
    padding: 12px; /* Bigger input boxes */
    border: 1px solid #e9ecef;
    border-radius: 8px; /* More rounded corners */
    font-size: 16px;
    color: #333;

    &:focus {
        outline: none;
        border-color: #4285f4;
    }
`;

const FormTextArea = styled.textarea`
    padding: 12px; /* Bigger text area */
    border: 1px solid #e9ecef;
    border-radius: 8px; /* More rounded corners */
    font-size: 16px;
    color: #333;
    height: 180px; /* Increase height */
    resize: vertical;

    &:focus {
        outline: none;
        border-color: #4285f4;
    }
`;

const DateTimeContainer = styled.div`
    display: flex;
    gap: 20px;

    & > div {
        flex: 1;
    }
`;

const SubmitButton = styled.button`
    background-color: #4285f4;
    color: #fff;
    border: none;
    padding: 14px 24px; /* Slightly bigger button */
    border-radius: 8px; /* More rounded corners */
    cursor: pointer;
    font-size: 18px;
    align-self: flex-end; /* Align to right */

    &:hover {
        background-color: #3367d6;
    }
`;

const CloseButton = styled.button`
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 35px; /* Slightly bigger */
    height: 35px; /* Slightly bigger */
    position: absolute;
    top: 15px; /* Slightly moved down */
    right: 15px; /* Slightly moved in */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px; /* Slightly bigger "X" */
    color: #333;

    &:hover {
        background-color: #f0f0f0;
    }
`;

interface CreateAnnouncementProps {
    // You might pass data or functions here if needed from a parent component
}

const CreateAnnouncementPage: FC<CreateAnnouncementProps> = () => {
    const navigate = useNavigate();
    const { addAnnouncement } = useAnnouncementContext(); // Use the context
    const [heading, setHeading] = useState("");
    const [type, setType] = useState("");
    const [organizedBy, setOrganizedBy] = useState("");
    const [expiringDate, setExpiringDate] = useState("");
    const [expiringTime, setExpiringTime] = useState("");
    const [description, setDescription] = useState("");
    const [registrationLink, setRegistrationLink] = useState("");

    const handleClose = () => {
        navigate(-1);  // Go back to the previous page
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create a new announcement object
        const newAnnouncement: Announcement = {
            id: Date.now(), // Generate a unique ID
            heading,
            type,
            organizedBy,
            expiringDate,
            expiringTime,
            description,
            registrationLink,
        };

        addAnnouncement(newAnnouncement); // Add the announcement using the context

        navigate(-1); // Go back to the previous page
    };

    return (
        <OuterContainer>
            <PageContainer>
                <ContentArea>
                    <Card>
                        <FormTitle>Create an Announcement</FormTitle>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <FormLabel>Heading:</FormLabel>
                                <FormInput
                                    type="text"
                                    value={heading}
                                    onChange={(e) => setHeading(e.target.value)}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Type:</FormLabel>
                                <FormInput
                                    type="text"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Organized By:</FormLabel>
                                <FormInput
                                    type="text"
                                    value={organizedBy}
                                    onChange={(e) => setOrganizedBy(e.target.value)}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Expiring on:</FormLabel>
                                <DateTimeContainer>
                                    <FormInput
                                        type="date"
                                        value={expiringDate}
                                        onChange={(e) => setExpiringDate(e.target.value)}
                                        required
                                    />
                                    <FormInput
                                        type="time"
                                        value={expiringTime}
                                        onChange={(e) => setExpiringTime(e.target.value)}
                                        required
                                    />
                                </DateTimeContainer>
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Description:</FormLabel>
                                <FormTextArea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Registration Link:</FormLabel>
                                <FormInput
                                    type="url"
                                    value={registrationLink}
                                    onChange={(e) => setRegistrationLink(e.target.value)}
                                />
                            </FormGroup>

                            <SubmitButton type="submit">Submit</SubmitButton>
                        </Form>
                        <CloseButton onClick={handleClose}>
                            X
                        </CloseButton>
                    </Card>
                </ContentArea>
            </PageContainer>
        </OuterContainer>
    );
};

export default CreateAnnouncementPage;