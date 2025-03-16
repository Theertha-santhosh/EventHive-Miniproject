// src/components/MemberCard.tsx
import React from 'react';
import {CommunityMember} from '../types/member'; // Assuming the interface is defined there

interface MemberCardProps {
    member: CommunityMember;
    approveRequest?: (memberId: string) => void;  // Optional for pending requests
    rejectRequest?: (memberId: string) => void;   // Optional for pending requests
    deleteMember?: (memberId: string) => void;    // Optional for member list
}

const MemberCard: React.FC<MemberCardProps> = ({ member, approveRequest, rejectRequest, deleteMember }) => {
    return (
        <div className="member-card">
            <img src={member.photo} alt={member.name} className="member-image" />
            <div className="member-details">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-info">
                    <strong>Course:</strong> {member.course} <br />
                    <strong>Stream:</strong> {member.streamOfStudy}
                    {member.joinedOn && <><br/><strong>Joined:</strong> {member.joinedOn}</>}
                    {member.role && <><br/><strong>Role:</strong> {member.role}</>}
                    {member.requestedOn && <><br/><strong>Requested on:</strong> {member.requestedOn}</>}
                </p>
            </div>

            {approveRequest && rejectRequest && (
                <div className="member-actions">
                    <button className="approve-button" onClick={() => approveRequest(member.id)}>
                        Approve
                    </button>
                    <button className="reject-button" onClick={() => rejectRequest(member.id)}>
                        Reject
                    </button>
                </div>
            )}

            {deleteMember && (
                <div className="member-actions">
                    <button className="delete-button" onClick={() => deleteMember(member.id)}>
                        <img width={38} height={38} src="/images/binnew.png" alt="Delete" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default MemberCard;