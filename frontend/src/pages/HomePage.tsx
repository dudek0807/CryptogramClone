import React from "react";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  username?: string;
}

const HomePage: React.FC = () => {
  const token = localStorage.getItem("token");

  let username: string | null = null;

  if (token) {
    try {
      const decoded = jwtDecode<DecodedToken>(token);
      username = decoded.username || null;
      console.log(decoded)
    } catch (error) {
      console.error("Errordecoding token:", error);
    }
  }

  return (
    <div>
      <h1>Welcome {username ? username : "guest"}!</h1>
    </div>
  );
};

export default HomePage;
