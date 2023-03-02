import React, { useState, useEffect } from 'react'

export default function Test() {
  const [message, setMessage] = useState('');
  const apiUrl = process.env.REACT_APP_API_CONTAINER

  useEffect(() => {
    // fetch('http://estoqueapi:3001/api/')
    fetch(apiUrl)
      .then(data => data.text())
      .then(data => console.log(data))
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
