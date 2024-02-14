import React, { useState } from 'react';

function Chat(props) {
    
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    
    // Hanling the send button
    function handleSend(e) {
        e.preventDefault();
        const message = {
            role: "You",
            message: inputValue,
            position: 'right'
        };
        setMessages([...messages, message]);
        props.socket.emit('send', { name: props.name, message: inputValue, position: 'right' });
        setInputValue('');
    }

    // receiving the message with the help of web socket and updating all the states
    props.socket.on("receive", async (data) => {
        console.log(data.name);
        const receivedMessage = {
            role: data.name,
            message: data.message.message,
            position: 'left'
        };
        await setMessages([...messages, receivedMessage]);
    });

    return (
        <div className="container">
            <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="160" fill="currentColor" className="bi bi-chat-dots mb-4 mt-5" viewBox="0 0 16 16">
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
                </svg>
                <div>
                    <h3>Chat Application</h3>
                </div>
            </div>
            <ul className="list-group">
                {messages.map((msg, index) => (
                    <li key={index} className={`list-group-item chat-item ${msg.position}`}>
                        <span>{msg.message}</span>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSend} className="mt-5">
                <div className="row pb-5">
                    <div className="col-8 input-box">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="form-control"
                            aria-describedby="passwordHelpBlock"
                        />
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Chat;