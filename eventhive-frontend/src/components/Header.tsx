import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="EventHive Logo" />
      </div>
      <div className="user-profile">
        <img src="/images/user-profile.png" alt="User Profile" />
        <span>
          Moni Roy <br /> Admin
        </span>
      </div>
    </header>
  );
};

export default Header;