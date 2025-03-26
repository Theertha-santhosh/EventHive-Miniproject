// src/pages/CommunityMembersPage.tsx
import React, { useState, useEffect } from 'react';

interface CommunityMember {
    id: string;
    photo: string;
    name: string;
    course: string;
    streamOfStudy: string;
    requestedOn?: string;
    joinedOn?: string;
    role?: string;
}

const CommunityMembersPage = () => {
    const [pendingRequests, setPendingRequests] = useState<CommunityMember[]>([]);
    const [membersList, setMembersList] = useState<CommunityMember[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [memberCount, setMemberCount] = useState(4); // Initialize member count

    // Mock API Fetch Functions (Replace with your actual API calls)
    const fetchPendingRequests = async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const data: CommunityMember[] = [
            { id: '1', photo: '/images/stu1.png', name: 'Arya A', course: 'BTech', streamOfStudy: 'Computer Science and Engineering', requestedOn: '12-2-25' },
            { id: '2', photo: '/images/stu2.png', name: 'Riyas K', course: 'BTech', streamOfStudy: 'Civil Engineering', requestedOn: '10-2-25' },
            { id: '3', photo: '/images/stu3.png', name: 'Neha S', course: 'BTech', streamOfStudy: 'Mechanical Engineering', requestedOn: '10-1-25' },
        ];
        setPendingRequests(data);
    };

    const fetchMembersList = async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const data: CommunityMember[] = [
            { id: '4', photo: '/images/stu4.png', name: 'Arya A', course: 'BTech', streamOfStudy: 'Computer Science and Engineering', joinedOn: '15-2-25', role: 'Member' },
            { id: '5', photo: '/images/stu5.png', name: 'Riyas K', course: 'BTech', streamOfStudy: 'Electronics and Communication Engineering', joinedOn: '10-2-25', role: 'Member' },
            { id: '6', photo: '/images/stu6.png', name: 'Neha S', course: 'BTech', streamOfStudy: 'Computer Science and Engineering', joinedOn: '1-1-25', role: 'Student Co-ordinator' },
            { id: '7', photo: '/images/stu7.png', name: 'Amritha R', course: 'BTech', streamOfStudy: 'Mechanical Engineering', joinedOn: '30-1-24', role: 'Co-lead' },
        ];
        setMembersList(data);
    };

    const approveRequest = async (memberId: string) => {
        console.log(`Approving request for member ID: ${memberId}`);
        const approvedMember = pendingRequests.find(member => member.id === memberId);
        if (approvedMember) {
            setMembersList([
                ...membersList,
                {
                    ...approvedMember,
                    joinedOn: new Date().toLocaleDateString(),
                    role: 'Member',
                },
            ]);
            setPendingRequests(pendingRequests.filter(member => member.id !== memberId));
            setMemberCount(prevCount => prevCount + 1); // Increment member count
        }
    };

    const rejectRequest = async (memberId: string) => {
        console.log(`Rejecting request for member ID: ${memberId}`);
        setPendingRequests(pendingRequests.filter(member => member.id !== memberId));
    };

    const deleteMember = async (memberId: string) => {
        console.log(`Deleting member with ID: ${memberId}`);
        setMembersList(membersList.filter(member => member.id !== memberId));
        setMemberCount(prevCount => prevCount - 1); // Decrement member count
    };

    useEffect(() => {
        fetchPendingRequests();
        fetchMembersList();
    }, []);

    useEffect(() => {
        // Update memberCount based on the initial membersList length after it's fetched
        setMemberCount(membersList.length);
    }, [membersList]); // Run only when membersList changes


    const filteredMembers = membersList.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '20px' }}>
            <h1>Community Members <span style={{ color: 'grey' }}>{memberCount}</span></h1>

            <h2>Pending Request</h2>
            {/* ... (Rest of the component remains the same) */}
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Stream of Study</th>
                        <th>Requested on</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pendingRequests.map(member => (
                        <tr key={member.id}>
                            <td><img src={member.photo} alt={member.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></td>
                            <td>{member.name}</td>
                            <td>{member.course}</td>
                            <td>{member.streamOfStudy}</td>
                            <td>{member.requestedOn || member.joinedOn}</td>
                            <td className='button-table-row'>
                                <button className='approve-button' onClick={() => approveRequest(member.id)}>Approve</button>
                                <button className='reject-button' onClick={() => rejectRequest(member.id)}>Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Members List</h2>
            <input
                type="text"
                placeholder="Search"
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Stream of Study</th>
                        <th>Joined on</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredMembers.map(member => (
                        <tr key={member.id}>
                            <td><img src={member.photo} alt={member.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></td>
                            <td>{member.name}</td>
                            <td>{member.course}</td>
                            <td>{member.streamOfStudy}</td>
                            <td>{member.joinedOn || member.requestedOn}</td>
                            <td>{member.role}</td>
                            <td className='button-table-row'>
                                <button className='delete-button' onClick={() => deleteMember(member.id)}>
                                    <img width={18} src="/images/binnew.png" alt="delete-button" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CommunityMembersPage;