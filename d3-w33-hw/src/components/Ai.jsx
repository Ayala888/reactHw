import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export default function Ai() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chatMessages');
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    const newUserMessage = { sender: 'user', text: prompt };
    setMessages((prev) => [...prev, newUserMessage]);
    setPrompt('');
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(prompt);
      const geminiResponse = await result.response;
      const aiText = await geminiResponse.text();

      const newAIMessage = { sender: 'ai', text: aiText };
      setMessages((prev) => [...prev, newAIMessage]);
    } catch (err) {
      console.error('Ошибка при запросе к Gemini:', err);
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: '❌ Error: Check your API key or network.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} min-h-screen p-5 transition-all`}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Gemini AI Chat</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
          >
            {darkMode ? '☀ Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Chat window */}
        <div className="h-[400px] overflow-y-auto bg-white dark:bg-gray-800 border p-4 rounded mb-4 flex flex-col gap-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow-md 
                ${msg.sender === 'user' 
                  ? 'bg-green-500 text-white self-end rounded-br-none' 
                  : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white self-start rounded-bl-none'
                }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="text-sm text-gray-400 self-start">Gemini is typing...</div>
          )}
        </div>

        {/* Input area */}
        <div className="flex gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 rounded border border-gray-400 dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
