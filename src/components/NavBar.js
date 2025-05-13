import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img
                    src={`${process.env.PUBLIC_URL}/favicon.png`}
                    alt="Sincerity Cleaning logo"
                    className="navbar-icon"
                />
                <span className="navbar-logo">
                    橙心橙意清洁珀斯&nbsp;|&nbsp;Sincerity Cleaning Perth
                </span>
            </div>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">首页 Home</Link>
                <Link to="/pricing" className="navbar-link">产品服务 Products</Link>
                <Link to="/guarantee" className="navbar-link">质量保证 Quality</Link>
                <Link to="/booking" className="navbar-link highlight">立即预约 Book</Link>
            </div>
        </nav>
    );
}