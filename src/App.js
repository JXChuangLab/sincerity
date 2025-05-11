import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ServerPage from "./pages/ServerPage";
import GuaranteeSectionPage from "./pages/GuaranteeSectionPage"
import ContactSectionPage from "./pages/ContactSectionPage"

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        {/* 页面路由显示区域 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<ServerPage />} />
          <Route path="/guarantee" element={<GuaranteeSectionPage />} />
          <Route path="/booking" element={<ContactSectionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
