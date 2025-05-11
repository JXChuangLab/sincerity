import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* 品牌简介 */}
                <div className="footer-section">
                    <h3 className="footer-heading">橙心橙意清洁</h3>
                    <p>专业庭院清洁，透明定价，高标准服务，让家园焕然一新。</p>
                    <p className="footer-abn">ABN 12 345 678 910</p>
                </div>

                {/* 快捷导航 */}
                <div className="footer-section">
                    <h3 className="footer-heading">网站导航</h3>
                    <ul className="footer-navigation">
                        <li>首页</li>
                        <li>透明定价</li>
                        <li>深度清洁</li>
                        <li>特色服务</li>
                        <li>质量保证</li>
                        <li>立即预约</li>
                    </ul>
                </div>

                {/* 联系方式 */}
                <div className="footer-section">
                    <h3 className="footer-heading">联系我们</h3>
                    <p>澳洲：+61 451 105 818</p>
                    <p>中国：+86 137 9846 1669</p>
                    <p>邮箱：erdai202207@163.com</p>
                    <p>范围：Joondalup – Rockingham</p>
                    {/* 可选：快速联系按钮 */}
                    <a href="tel:+61451105818" className="cta-btn">一键来电</a>
                </div>

                {/* 社交媒体 */}
                <div className="footer-section">
                    <h3 className="footer-heading">关注我们</h3>
                    <div className="social-row">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">FB</a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">IG</a>
                        <a href="https://wa.me/61451105818" target="_blank" rel="noreferrer">WhatsApp</a>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                © 2025 橙心橙意清洁珀斯 ® All Rights Reserved
            </div>
        </footer>
    );
}
