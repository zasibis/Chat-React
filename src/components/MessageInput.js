import React, {useState} from 'react';

const MessageInput = ({addMessage}) => {
    const [input, setInput] = useState('');
    return (
        <div className="message-input">
            <input type="text" className="message-input-text" placeholder="new message" value={input} onInput={e => setInput(e.target.value)}></input>
            <button onClick={() => addMessage(input)} className="message-input-button">Send</button>
        </div>
    );
};

export default MessageInput;