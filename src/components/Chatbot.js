import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'User', text: input }]);
      // Handle chatbot response logic here (e.g., integrate with an NLP API)
      setMessages(prev => [...prev, { sender: 'Bot', text: 'Processing your request...' }]);
      setInput('');
    }
  };

  return (
    <div className="chatbot">
      <h2>Chatbot</h2>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'User' ? 'user-message' : 'bot-message'}>
            <p><strong>{msg.sender}:</strong> {msg.text}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Ask me about your trip preferences..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;
