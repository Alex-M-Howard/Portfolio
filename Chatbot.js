import React, { useState } from 'react';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const apiKey = 'your_api_key_here';
    const response = await fetch(`https://api.openai.com/v1/engines/davinci/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: input,
        max_tokens: 100,
        temperature: 0.5,
      })
    });
    const json = await response.json();
    setResponse(json.choices[0].text);
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
