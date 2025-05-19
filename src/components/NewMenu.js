// src/components/NewMenu.js
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Link } from "react-router-dom";

export default function NewMenu() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="horizontal-menu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {!user && <Link to="/login">Login</Link>}
      {!user && <Link to="/register">Register</Link>}
      {user && <button onClick={logout}>Logout</button>}
      {user && (
        <span className="user-info">
          Logged-in: {user.lastName} {user.firstName} ({user.email})
        </span>
      )}
    </nav>
  );
}
