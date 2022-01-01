import React from 'react';

const Header = ({usersCount, messagesCount, dateStr}) => {
    return (
        <div className="header">
            <h3 className="header-title">New Year</h3>
            <h3 className="header-users-count">{usersCount} participants</h3> 
            <h3 className="header-messages-count">{messagesCount} massage</h3>
            <h3 className="header-last-message-date">last massage at {dateStr}</h3>
            
        </div>
    );
};

export default Header;