// ContactSection.js
import React from 'react';
import './ContactSectionPage.css';
import Footer from "../components/Footer";

const CONTACT_ITEMS = [
    {
        icon: '📞',
        title: '中文联系电话',
        desc: '+86-13798461669',
        sub: '欢迎来电咨询，我们将竭诚为您服务',
    },
    {
        icon: '✉️',
        title: '中文邮箱',
        desc: 'lindalee@163.com',
        sub: '随时欢迎发送邮件咨询，我们将尽快回复',
    },
    {
        icon: '📞',
        title: 'English Phone',
        desc: '+61-409868602',
        sub: "Call us for more information, we're here to help",
    },
    {
        icon: '✉️',
        title: 'English Email',
        desc: 'lindalee@163.com',
        sub: "Feel free to email us, we'll get back to you soon",
    },
];

export default function ContactSection() {
    return (
        <section className="contact-section">
            <div className="cta-row">
                <div className="cta-text">
                    <h2 className="cta-title">立即预约服务!</h2>
                    <h2 className="cta-title">Book Now!</h2>
                    <p className="cta-sub">
                        橙心橙意清洁珀斯期待为您服务。<br />
                        中文英文双语服务，覆盖Scarborough到Canning Vale。
                    </p>
                    <p className="cta-sub">
                        Sincerity Cleaning Perth looks forward to serving you.<br />
                        Chinese English bilingual service, covering Scarborough to Canning Vale.
                    </p>
                </div>
                <div className="cta-image">
                    <img
                        src="https://miaoda-image.cdn.bcebos.com/img/corpus/6d33291068894ce4ab18b48ef3fb009a.jpg"
                        alt="Cleaning service"
                    />
                </div>
            </div>

            <div className="contact-grid">
                {CONTACT_ITEMS.map((item, idx) => (
                    <div key={idx} className="contact-card">
                        <div className="card-icon">{item.icon}</div>
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-desc">{item.desc}</p>
                        <p className="card-sub">{item.sub}</p>
                        <button className="card-button">{item.title}</button>
                    </div>
                ))}
            </div>
            <Footer />
        </section>
    );
}
