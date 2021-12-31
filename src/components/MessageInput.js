import React from 'react';

const MessageInput = ({addMessage}) => {
    return (
        <div className="message-input">
            <div className="message-input-text">
            {/* <p>dewfewf</p> */}
            </div>
            <button onClick={() => addMessage()} className="message-input-button">Send</button>
        </div>
    );
};

export default MessageInput;