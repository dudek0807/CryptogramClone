import React, { useState, useEffect } from 'react';

interface LoginProps {
  onLoginSuccess: (token: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  // Dla debugowania - zobacz czy zmienna jest dostępna w komponencie
  useEffect(() => {
    console.log('BACKEND_URL in Login:', process.env.REACT_APP_BACKEND_URL);
  }, []);

  const backendUrl = process.env.REACT_APP_BACKEND_URL //|| 'http://localhost:3000';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    try {
      const res = await fetch(`${backendUrl}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem('token', data.token);
        onLoginSuccess(data.token);
        setMessage('Zalogowano pomyślnie');
      } else {
        setMessage(data.message || 'Niepoprawne dane');
      }
    } catch {
      setMessage('Błąd sieci');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Logowanie</h2>
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
        <label>Hasło:</label>
        <input
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Zaloguj się</button>
    </form>
  );
};

export default Login;
