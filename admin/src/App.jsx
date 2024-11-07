import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import CreatePost from "./Components/CreatePost";
import Manage from "./Components/Manage";
import Header from "./Components/Header";
import UpdatePost from "./Components/UpdatePost";
const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD; // Set your admin password here

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password == correctPassword) {
      setIsAdmin(true);
      navigate("/create");
    } else {
      console.log(password, correctPassword);
      alert("Access denied: Incorrect password.");
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      {pathname === "/create" || pathname === "/manage" || isAdmin === true ? (
        ""
      ) : (
        <>
          <h1 className="text-3xl font-semibold text-center my-6 lg:text-5xl">
            Welcome Admin
          </h1>
          <h3 className="text-2xl hide font-semibold text-center mb-6 lg:text-4xl">
            Please Login Before Proceed
          </h3>
        </>
      )}
      {!isAdmin ? (
        <>
          <form onSubmit={handleSubmit} className="flex justify-center">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter Admin Password"
              className="border p-2 rounded"
              required
            />
            <button
              type="submit"
              className="ml-2 p-2 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          </form>
        </>
      ) : (
        <Routes>
          <Route path="/create" element={<CreatePost />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/update-post/:postId" element={<UpdatePost />}/>
        </Routes>
      )}
    </div>
  );
};

export default App;
