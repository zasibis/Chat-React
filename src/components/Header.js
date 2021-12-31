import React from 'react';

const Header = (messages) => {

    // const usersByChat = {messages.userid}.length;


    return (
        <div className="header">
            <h3 className="header-title">New Year</h3>
            <h3 className="header-users-count">{} participants</h3> 
            <h3 className="header-messages-count">{} massage</h3>
            <h3 className="header-last-message-date">last massage at {}</h3>
        </div>
    );
};

export default Header;