import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const apiKey = 'your_api_key_here';
    try {
      const res = await axios.post('https://api.openai.com/v1/engines/davinci/jobs', {
        prompt: input,
        max_tokens: 100,
        temperature: 0.5,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      });
      setResponse(res.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );
};

export default Chatbot;
