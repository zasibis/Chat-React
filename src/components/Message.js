import React from 'react';

const Message = ({text, time, avatar, userName}) => {
    return (

        <div className="massage">
            <div className="message-text">
                {text}
            </div>
            
            <div className="message-time">
                {time}
            </div>
                        
            <div className="message-like">
                {/* svg */}
            </div>
                        
            <img src={avatar} className="message-user-name" alt="avatar"/>
            
            <div className="message-user-name">
                {userName}
            </div>
        </div>
    );
};

export default Message;