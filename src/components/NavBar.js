import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">橙心橙意清洁</div>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">首页</Link>
                <Link to="/pricing" className="navbar-link">产品服务</Link>
                <Link to="/guarantee" className="navbar-link">质量保证</Link>
                <Link to="/booking" className="navbar-link highlight">立即预约</Link>
            </div>
        </nav>
    );
}