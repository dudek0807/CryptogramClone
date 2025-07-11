import React, { useState } from 'react';
import Login from '../components/Login';

const LoginPage = () => {
  const [token, setToken] = useState<string | null>(null);

  const handleLoginSuccess = (token: string) => {
    setToken(token);
    alert('Zalogowano pomyślnie');
    // tutaj możesz przekierować użytkownika lub ustawić globalny stan
  };

  return (
    <div>
      <Login onLoginSuccess={handleLoginSuccess} />
      {token && <p>Jesteś zalogowany. Token: {token}</p>}
    </div>
  );
};

export default LoginPage;
