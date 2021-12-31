import React from 'react';

const Header = ({usersCount, messagesCount, dateStr}) => {
    return (
        <div className="header">
            <h3 className="header-title">New Year</h3>
            <h3 className="header-users-count">{} participants</h3> 
            {usersCount}
            <h3 className="header-messages-count">{} massage</h3>
            {messagesCount}
            <h3 className="header-last-message-date">last massage at {}</h3>
            {dateStr}
        </div>
    );
};

export default Header;