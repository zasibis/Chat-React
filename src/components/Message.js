import React, {useState} from 'react';
import { ReactComponent as LikeSVG } from '../like.svg';


const Message = ({text, time, avatar, userName, formatDate}) => {
    const [like, setLike] = useState(false);
    return (

        <div className="massage">
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

                <LikeSVG 
                    onClick={() => setLike((prev) => !prev)}
                    className={`message-like ${like ? "like-active" : ""}`}
                />

            
            <div className="message-user-name">
                {userName}
            </div>
        </div>
    );
};

export default Message;