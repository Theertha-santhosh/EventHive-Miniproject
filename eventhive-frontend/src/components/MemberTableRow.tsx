    // src/components/MemberTableRow.tsx
    import React, { FC } from 'react';
    import {CommunityMember} from '../types/member'; // Assuming the interface is defined there

    interface MemberTableRowProps {
        member: CommunityMember;
        deleteMember?: (memberId: string) => void;
        approveRequest?: (memberId: string) => void;
        rejectRequest?: (memberId: string) => void;

    }

    const MemberTableRow: FC<MemberTableRowProps> = ({ member, deleteMember, approveRequest, rejectRequest }) => {
     const handleDeleteMember = () => {
             if (deleteMember) {
                 deleteMember(member.id);
             }
         };
      const handleApproveRequest = () => {
             if (approveRequest) {
                 approveRequest(member.id);
             }
         };

         const handleRejectRequest = () => {
             if (rejectRequest) {
                 rejectRequest(member.id);
             }
         };
         return (
             <tr>
                 <td>
                     <img src={member.photo} alt={member.name} style={{width:"50px", height: "50px", borderRadius: "50%"}}/>
                 </td>
                 <td>{member.name}</td>
                 <td>{member.course}</td>
                 <td>{member.streamOfStudy}</td>
                 <td>{member.requestedOn || member.joinedOn}</td>
                 <td>{member.role}</td>

                 <td className='action-cell'>
                  {deleteMember &&
                   <button className='delete-button' onClick={handleDeleteMember}>
                         <img width={18} src="/images/binnew.png" alt="delete-button" />
                      </button>}

                      {approveRequest && rejectRequest &&
                          <>
                              <button className='approve-button' onClick={handleApproveRequest}>
                                  Approve
                              </button>
                              <button className='reject-button' onClick={handleRejectRequest}>
                                  Reject
                              </button>
                          </>
                      }
                 </td>
             </tr>
         );
    };

    export default MemberTableRow;