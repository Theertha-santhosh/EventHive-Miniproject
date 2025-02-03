import React, { FC } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface DashboardProps{
    children: React.ReactNode;
}
const Dashboard: FC<DashboardProps> = ({children}) => {
    return (
        <div className='page-container'>
            <Sidebar />
             <div className="main-content">
              <Header />
             {children}
           </div>
        </div>
    );
};

export default Dashboard;