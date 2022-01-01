import React from 'react';

const OwnMessage = ({text, time, avatar, userName, getEditedMessage, deleteMessage, formatDate}) => {

    return (
        <div className="own-message">
            <div className="message-text">
                {text}
            </div>
                
            <div className="message-time">
                {time}
            </div>

            <div className="message-formatDate">
                {formatDate}
            </div>
            
            <img src={avatar} className="message-user-name" alt="avatar"/>

            <div className="message-user-name">
                {userName}
            </div>
                       
            <button onClick={getEditedMessage} className="message-edit">Edit</button>
            <button onClick={deleteMessage} className="message-delete">Delete</button>           

        </div>
    );
};

export default OwnMessage;