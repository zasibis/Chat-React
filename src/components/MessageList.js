import React from "react";
import Message from "./Message";
import OwnMessage from "./OwnMessage";
// import EditForm from "./EditForm";
// import MessageInput from "./MessageInput";
import Preloader from "./Preloader";


const MessageList = ({messages, formatDate, deleteMessage, getEditedMessage}) => {
    console.log(messages);
    const formatDateHM = (date) => {
        const dateValue = new Date(date);
        return `${dateValue.getHours()}:${dateValue.getMinutes()}`;
    }


    return (
        <div className="message-list">
            {
            messages.length ? ( 
                messages.map(({id, text, createdAt, avatar, user, userId}) => {
                    const ownMessage = userId === '533b5230-83c9-11e9-8e0c-c7eca82aa7bd';
                    return (
                        <>
                        {
                            ownMessage ? <OwnMessage 
                            text={text}
                            time={formatDateHM(createdAt)}
                            formatDate={formatDate(createdAt)}
                            avatar={avatar}
                            userName={user}
                            deleteMessage={() => deleteMessage(id)}
                            getEditedMessage={() => getEditedMessage(id)}
                            /> : (
                                <Message 
                                text={text}
                                time={formatDateHM(createdAt)}
                                formatDate={formatDate(createdAt)}
                                avatar={avatar}
                                userName={user}
                                />
                            )
                        }
                        </>

                    )
                })

             ) : (
                    <Preloader />
                )
            }
        </div>
    );
};

export default MessageList;