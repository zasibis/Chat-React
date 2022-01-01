import React from 'react';
import "../App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const Chat = () => {
    const addMessage = text => {
        const id = Math.floor(Math.random() * 100).toString();
        const date = new Date().toISOString();
        setMessages([...messages, { 
            ...ownMassage,
            id,
            createdAt: date,
            editedAt: "",
            text
         }]);
    }
    const ownMassage = {
            "userId": "533b5230-83c9-11e9-8e0c-c7eca82aa7bd",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRY166AtT_-QcOf08NEASmYlXwZO7eg9OZA&usqp=CAU",
            "user": "Dima Santarskyi"
    };

    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState();

    useEffect(() => {
        fetch("https://zasibis.github.io/homepage/users.json")
        .then(response => response.json())

        .then(data => setMessages(data))
      },[])

    const usersCount = () => {
        const usersId = messages.map(message => message.userId)
        return new Set(usersId).size
    }

    const latestMessages = messages.reduce((a, b) => {
        return new Date(a.createdAt) > new Date(b.createdAt) ? a : b;
      }, [])

    const date = latestMessages.createdAt ? new Date(latestMessages.createdAt) : '';
    const dateStr = date ?
        ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
        ("00" + date.getDate()).slice(-2) + "/" +
        date.getFullYear() + " " +
        ("00" + date.getHours()).slice(-2) + ":" +
        ("00" + date.getMinutes()).slice(-2) + ":" +
        ("00" + date.getSeconds()).slice(-2) :  ''

        var fulldays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        
        function formatDate(someDateTimeStamp) {
            const dt = new Date(someDateTimeStamp),
                date = dt.getDate(),
                month = months[dt.getMonth()],
                timeDiff = someDateTimeStamp - Date.now(),
                diffDays = new Date().getDate() - date,
                diffMonths = new Date().getMonth() - dt.getMonth(),
                diffYears = new Date().getFullYear() - dt.getFullYear();
        
            if(diffYears === 0 && diffDays === 0 && diffMonths === 0){
              return "Today";
            }else if(diffYears === 0 && diffDays === 1) {
              return "Yesterday";
            }else if(diffYears === 0 && diffDays === -1) {
              return "Tomorrow";
            }else if(diffYears === 0 && (diffDays < -1 && diffDays > -7)) {
              return fulldays[dt.getDay()];
            }else if(diffYears >= 1){
              return month + " " + date + ", " + new Date(someDateTimeStamp).getFullYear();
              }else {
                return fulldays[dt.getDay()] + ", " + month + " " + date;
              }
        }
        


        function deleteMessage(id) {
            const newMessages = messages.filter(message => message.id !== id)

            setMessages(newMessages);
        }

        function getEditedMessage(id) {
            const currentMessage = messages.filter(message => message.id === id)[0]
            setCurrentMessage(currentMessage)
        }



        function editMessage(id, newText) {
            const newMessages = [...messages];
            const index = newMessages.findIndex(message => message.id === id);
            newMessages[index].text = newText;

            setMessages(newMessages);
            setCurrentMessage(undefined);
        }

        

 
    return (
        <div className="chat">
            <Header  usersCount={usersCount()} messagesCount={messages.length} dateStr={dateStr}/>
            <MessageList messages={messages} formatDate={formatDate} deleteMessage={deleteMessage} getEditedMessage={getEditedMessage} />
            <MessageInput 
            currentMessage={currentMessage}
             addMessage={addMessage}
             editMessage={editMessage}
            />

      </div>
    );
};

export default Chat;