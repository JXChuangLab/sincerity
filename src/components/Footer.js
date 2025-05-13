import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* 品牌简介 */}
                <div className="footer-section">
                    <h3 className="footer-heading">橙心橙意清洁珀斯</h3>
                    <h3 className="footer-heading">Sincerity Cleaning Perth</h3>
                    <p>专业庭院清洁，透明定价，高标准服务，让家园焕然一新。</p>
                    <p>Professional courtyard cleaning, transparent pricing, high standard service, make your home look brand new.</p>
                </div>

                {/* 联系方式 */}
                <div className="footer-section">
                    <h3 className="footer-heading">联系我们</h3>
                    <h3 className="footer-heading">Contact Us</h3>
                    <p>澳洲:+61 451 105 818</p>
                    <p>AU:+61 451 105 818</p>
                    <p>中国:+86 137 9846 1669</p>
                    <p>CN:+86 137 9846 1669</p>
                    <p>邮箱: summerdai202207@163.com</p>
                    <p>Email: summerdai202207@163.com</p>
                    <p>范围：Joondalup – Rockingham</p>
                    <p>Range：Joondalup – Rockingham</p>
                </div>
            </div>

            <div className="footer-copyright">
                © 2025 橙心橙意清洁珀斯 ® All Rights Reserved
            </div>
        </footer>
    );
}
