import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';

function App() {
   console.log('BACKEND_URL:', process.env.REACT_APP_BACKEND_URL);
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
