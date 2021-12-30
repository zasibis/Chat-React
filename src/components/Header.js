import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header-title">
                <p>New Year Chat</p>
            </div>
            
            <div className="header-users-count">
                <p>{} participants</p>
            </div>
                        
            <div className="header-messages-count">
                <p>{} massage</p>
            </div>
                        
            <div className="header-last-message-date">
                <p>last massage at {}</p>
            </div>
        </div>
    );
};

export default Header;