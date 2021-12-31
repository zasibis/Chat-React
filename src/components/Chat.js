import React from 'react';
import "../App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import MessageList from "./MessageList";
import Preloader from "./Preloader";
import MessageInput from "./MessageInput";

const Chat = () => {
    const addMessage = text => {
        const id = Math.random().toString();
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
        
            "id": "80f08600-1b8f-11e8-9629-c7eca82aa7bd",
            "userId": "533b5230-83c9-11e9-8e0c-c7eca82aa7bd",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRY166AtT_-QcOf08NEASmYlXwZO7eg9OZA&usqp=CAU",
            "user": "Dima Santarskyi",
            "text": "Всем привет, мутим что-то на НГ тугезер?",
            "createdAt": "2021-12-23T12:33:21.745Z",
            "editedAt": ""
    };

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch("https://zasibis.github.io/homepage/users.json")
        .then(response => response.json())

        .then(data => setMessages(data))
      },[])


    return (
        <div className="chat">
            <Header />
            <MessageList messages={messages}/>
            <MessageInput 
             addMessage={addMessage}
            />

      </div>
    );
};

export default Chat;