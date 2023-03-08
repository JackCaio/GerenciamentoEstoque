import React, { useState } from 'react'

export default function Login() {
  const [login, setLogin] = useState({ user: '', password: '' });
  const apiUrl = process.env.REACT_APP_API_CONTAINER

  const handleInput = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`${apiUrl}user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(login)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  return (
    <div>
      <form onSubmit={ handleLogin }>
        <label htmlFor="user">
          Usuário
          <input type="text" id='user' name='user' value={ login.user } onChange={ handleInput } />
        </label>
        <label htmlFor="password">
          Senha
          <input type="password" id='password' name='password' value={ login.password } onChange={ handleInput } />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
