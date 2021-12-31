import React from 'react';

const MessageInput = ({addMessage}) => {
    return (
        <div className="message-input">
            <input type="text" class="message-input-text" placeholder="new message" value=""></input>
            <button onClick={() => addMessage()} className="message-input-button">Send</button>
        </div>
    );
};

export default MessageInput;