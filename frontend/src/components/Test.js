import React, { useState, useEffect } from 'react'

export default function Test() {
  const [message, setMessage] = useState('');
  const apiUrl = process.env.REACT_APP_API_CONTAINER

  useEffect(() => {
    // fetch('http://backend:3001/api/')
    fetch(apiUrl)
      .then(data => data.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Test</h1>
      <p>{apiUrl}</p>
      <p>{message}</p>
    </div>
  )
}
