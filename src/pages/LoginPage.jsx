import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === '4321') {
      navigate.push('/products');
    } else {
      setError('Credenciais inválidas!');
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={inputStyle}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          style={inputStyle}
        />
        {error && <p style={errorStyle}>{error}</p>}
        <button type="submit" style={buttonStyle}>Entrar</button>
      </form>
    </div>
  );
}

// Estilos inline para a página de login
const containerStyle = {
  padding: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px',
  border: 'none',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
};

export default LoginPage;
