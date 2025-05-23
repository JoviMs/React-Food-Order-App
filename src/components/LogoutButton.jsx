import React from "react";

const LogoutButton = () => {
  const handleLogout = async () => {
    await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "logout" }),
    });
    localStorage.removeItem("isLoggedIn");
    alert("Logged out!");
    window.location.href = "/login";
  };

  return (
    <button onClick={handleLogout} className="addTOCart__btn">
      Logout
    </button>
  );
};

export default LogoutButton;
