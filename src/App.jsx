import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import "./index.css";
import HomePage from "./pages/HomePage";
import LayoutScreen from "./pages/LayoutScreen";






const App = () => {
  return (
    <>
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white ">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-[32rem] md:h-[32rem] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 md:w-[32rem] md:h-[32rem] bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob2 animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/2 w-56 h-56 md:w-[28rem] md:h-[28rem] bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob3 animation-delay-4000"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 md:w-[28rem] md:h-[28rem] bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-1000"></div>
      </div>
      
      {/* Scrollable Content */}
      <div className="relative min-h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<LayoutScreen />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
