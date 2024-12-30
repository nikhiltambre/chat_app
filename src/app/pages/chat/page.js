'use client';
import { useEffect, useState } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  let socket;

  useEffect(() => {
    // Connect to the WebSocket server
    socket = new WebSocket('ws://localhost:8000');
    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.send(input);
      setInput('');
    }
  };
return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Chat Interface</h1>
      <div className="w-full max-w-4xl h-96 bg-white border-2 border-gray-300 rounded-lg shadow-md overflow-auto p-4 mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className="bg-gray-200 p-3 mb-2 rounded-lg text-gray-800">
            {msg}
          </div>
        ))}
      </div>
      <div className="flex w-full max-w-4xl">
        <input
          type="text"
          className="w-full p-3 border-2 border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message"
        />
        <button
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
