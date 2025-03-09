import React, { useState, useEffect, useMemo, FC } from 'react';

interface FeedbackItem {
    id: number;
    date: string;
    eventName: string;
    feedback: string;
    isRead: boolean;
}

const Feedback: FC = () => {
    const [feedbackData, setFeedbackData] = useState<FeedbackItem[]>([]);
    const [loading, setLoading] = useState(true);

    const dummyData: FeedbackItem[] = useMemo(() => [
        { id: 1, date: '04-03-2025', eventName: 'Introduction to Figma', feedback: 'The session was informative, but a hands-on design challenge would have been helpful.', isRead: false },
        { id: 2, date: '02-03-2025', eventName: 'Easy EDA', feedback: 'The statistical insights were useful, but adding more visualization techniques would be great.', isRead: false },
        { id: 3, date: '01-03-2025', eventName: 'Introduction to Web Development', feedback: 'The concepts were clear, but a live coding example for JavaScript would have improved understanding.', isRead: false },
        { id: 4, date: '27-02-2025', eventName: 'App Development Workshop', feedback: 'The workshop gave a good foundation, but an advanced session on backend integration would be beneficial.', isRead: false },
        { id: 5, date: '25-02-2025', eventName: 'App Development Workshop', feedback: 'The workshop covered the basics well, but adding a Flutter vs React Native comparison would be great.', isRead: false },
        { id: 6, date: '22-02-2025', eventName: 'Easy EDA', feedback: 'The examples were clear, but integrating real-world datasets for analysis would be better.', isRead: false },
        { id: 7, date: '20-02-2025', eventName: 'Introduction to Web Development', feedback: 'The HTML and CSS portions were great, but more JavaScript examples would help.', isRead: false },
        { id: 8, date: '18-02-2025', eventName: 'Introduction to Figma', feedback: 'The session was well-paced, but covering more UI/UX principles would have added value.', isRead: false },
        { id: 9, date: '15-02-2025', eventName: 'Introduction to Web Development', feedback: 'The session was useful, but explaining responsive design in more depth would help.', isRead: false },
        { id: 10, date: '14-02-2025', eventName: 'Introduction to Figma', feedback: 'The UI design concepts were good, but real-time prototyping would add more value.', isRead: true },
        { id: 11, date: '13-02-2025', eventName: 'App Development Workshop', feedback: 'The demo was great, but I wish the backend integration part was more detailed.', isRead: true },
        { id: 12, date: '12-02-2025', eventName: 'Easy EDA', feedback: 'It was a good introduction, but showing different EDA tools would have helped.', isRead: true },
        { id: 13, date: '11-02-2025', eventName: 'Introduction to Web Development', feedback: 'Great explanation of fundamentals, but more interactive coding sessions would be great.', isRead: true },
        { id: 14, date: '10-02-2025', eventName: 'Introduction to Figma', feedback: 'Figma’s features were well explained, but practical exercises would make it more engaging.', isRead: true },
        { id: 15, date: '09-02-2025', eventName: 'Introduction to Web Development', feedback: 'The instructor explained HTML well, but CSS animations should have been covered too.', isRead: true },
        { id: 16, date: '08-02-2025', eventName: 'Introduction to Web Development', feedback: 'Good for beginners, but the JavaScript part felt a bit rushed.', isRead: true },
        { id: 17, date: '07-02-2025', eventName: 'Easy EDA', feedback: 'The session was detailed, but it would have been nice to compare Python and R for EDA.', isRead: true },
        { id: 18, date: '06-02-2025', eventName: 'App Development Workshop', feedback: 'The introduction was great, but more focus on UI/UX best practices would be helpful.', isRead: true },
        { id: 19, date: '05-02-2025', eventName: 'Introduction to Figma', feedback: 'The tools were well explained, but adding design system guidelines would be useful.', isRead: true },
    ], []);

    useEffect(() => {
        setTimeout(() => {
            setFeedbackData([...dummyData].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
            setLoading(false);
        }, 500);
    }, [dummyData]);

    const handleActionClick = (id: number) => {
        setFeedbackData(prevData =>
            prevData.map(item => {
                if (item.id === id) {
                    return { ...item, isRead: !item.isRead };
                }
                return item;
            })
        );
    };

    const handleDelete = (id: number) => {
        setFeedbackData(prevData => prevData.filter(item => item.id !== id));
    };

    const getActionButton = (item: FeedbackItem) => {
        return item.isRead
            ? <button className="feedback-button delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
            : <button className="feedback-button mark-as-read-button" onClick={() => handleActionClick(item.id)}>Mark as Read</button>;
    };

    return (
        <div className="feedback-container">
            <h1 className="feedback-header">Feedback</h1>
            {loading ? (
                <p className="loading-indicator">Loading...</p>
            ) : (
                <table className="feedback-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Event Name</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbackData.map(item => (
                            <tr key={item.id} style={{ fontWeight: !item.isRead ? 'bold' : 'normal' }}>
                                <td>{item.date}</td>
                                <td>{item.eventName}</td>
                                <td>{item.feedback}</td>
                                <td>{getActionButton(item)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Feedback;