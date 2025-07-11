import React, { useState } from 'react';
import Login from '../components/Login';

const LoginPage = () => {
  const [token, setToken] = useState<string | null>(null);

  const handleLoginSuccess = (token: string) => {
    setToken(token);
  };

  return (
    <div>
      <Login onLoginSuccess={handleLoginSuccess} />
      {token && <p>You are logged in.</p>}
    </div>
  );
};

export default LoginPage;
