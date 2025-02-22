// src/components/ButtonTable.tsx
import React, { FC } from 'react';

interface ButtonTableProps {
    approveRequest: (memberId: string) => void;
    rejectRequest: (memberId: string) => void;
    memberId: string
}

const ButtonTable: FC<ButtonTableProps> = ({ approveRequest, rejectRequest, memberId }) => {
    return (
        <div className='button-table-row'>
            <button className='approve-button' onClick={() => approveRequest(memberId)}>
                Approve
            </button>
            <button className='reject-button' onClick={() => rejectRequest(memberId)}>
                Reject
            </button>
        </div>
    );
};

export default ButtonTable;