import React, {useState, useEffect} from 'react';

const MessageInput = ({addMessage, currentMessage, editMessage}) => {
    const [input, setInput] = useState('');

    useEffect(() => {
        if (currentMessage) {
            setInput(currentMessage.text)
        }
      },[currentMessage])

      const onEdit = () => {
        editMessage(currentMessage.id, input);
        setInput('');
      }

      const onSend = () => {
        addMessage(input);
        setInput('');
      }


    return (
        <div className="message-input">
            <input type="text" className="message-input-text" placeholder="new message" value={input} onChange={e => setInput(e.target.value)}></input>
            {currentMessage ? (
                <button onClick={onEdit} className="message-input-button">Edit</button>
            ) : (
                <button onClick={onSend} className="message-input-button">Send</button>
            )
            }
        </div>
    );
};

export default MessageInput;