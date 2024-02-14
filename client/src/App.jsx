import './App.css';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import io from "socket.io-client";
import { useState } from "react";

const socket = io.connect("http://localhost:8000");

function App() {
  const [isUser, setUser] = useState(false);
  const [username, setUsername] = useState('');
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage setUser={setUser} setUsername={setUsername}/>} />
          <Route path="/chat" element={<ChatPage socket={socket} username={username}/>} />
          <Route path="/signup" element={<SignUpPage  setUser={setUser} setUsername={setUsername}/>} />
          <Route path="/login" element={<LoginPage setUser={setUser} setUsername={setUsername}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
