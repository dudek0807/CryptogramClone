import React, { useState } from 'react';
import Register from '../components/Register';

const RegisterPage = () => {
  const [registered, setRegistered] = useState(false);

  const handleRegisterSuccess = () => {
    setRegistered(true);
  };

  return (
    <div>
      <Register onRegisterSuccess={handleRegisterSuccess} />
      {registered && <p style={{ color: 'green' }}>Account created. You can now log in.</p>}
    </div>
  );
};

export default RegisterPage;
