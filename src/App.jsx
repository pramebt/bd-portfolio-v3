import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./index.css";
import HomePage from "./pages/HomePage";





const App = () => {
  return (
    <>
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-10 h-screen w-full bg-gradient-to-br from-blue-100 via-white to-white">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-1000"></div>
      </div>
      
      {/* Scrollable Content */}
      <div className="relative min-h-screen">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
