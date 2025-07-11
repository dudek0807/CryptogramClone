import React, { useState } from 'react';

interface RegisterProps {
  onRegisterSuccess: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegisterSuccess }) => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    try {
      const res = await fetch(`${backendUrl}/api/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Rejestracja udana! Możesz się teraz zalogować.');
        onRegisterSuccess();
      } else {
        setMessage(data.message || 'Coś poszło nie tak.');
      }
    } catch {
      setMessage('Błąd sieci');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Rejestracja</h2>
      {message && <p>{message}</p>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Nazwa użytkownika:</label>
        <input
          type="text"
          required
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Hasło:</label>
        <input
          type="password"
          required
          minLength={6}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Zarejestruj się</button>
    </form>
  );
};

export default Register;
