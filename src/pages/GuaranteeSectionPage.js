import React, { useState, useEffect } from "react";
import "./GuaranteeSectionPage.css";
import Footer from "../components/Footer";

const slides = [
    "https://miaoda-image.cdn.bcebos.com/img/corpus/a47f7b98dac24afaa847308d18955e48.jpg",
    "https://miaoda-image.cdn.bcebos.com/img/corpus/fc2c1a6df42c441ba441c04f86c634d4.jpg",
    "https://miaoda-image.cdn.bcebos.com/img/corpus/4e72fdd6363444e490123d85731cbb18.jpg"
];

const features = [
    {
        icon: "https://miaoda-img.cdn.bcebos.com/img/corpus/15ae1841780f46b0965e260068c12213.jpg",
        title: "不满意？24 h 内免费返工",
        titleEn: "dissatisfied? Free rework within 24 hours.",
        text: "若服务不达标，48 小时内立刻返工，直到您满意为止。",
        textEn: "If the service does not meet the standard, we will immediately rework within 48 hours until you are satisfied."
    },
    {
        icon: "https://miaoda-img.cdn.bcebos.com/img/corpus/7a5b3673bb7b4525a8191bdbf9b39423.jpg",
        title: "200 万澳元责任险",
        titleEn: "2 million Australian dollars liability insurance",
        text: "每次服务均投保200万澳元公共责任险，为您的财产保驾护航。",
        textEn: "Every service is insured with $2 million public liability insurance to safeguard your property."
    },
    {
        icon: "https://miaoda-img.cdn.bcebos.com/img/corpus/a6c1977121984e7685dda05226c9f4dd.jpg",
        title: "员工 100% 背景核查",
        titleEn: "100% background check for employees",
        text: "所有员工通过 WA Police Clearance，专业且安全可靠。",
        textEn: "All employees are professional, safe, and reliable through WA Police Clearance."
    }
];

export default function GuaranteePage() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(
            () => setCurrent((idx) => (idx + 1) % slides.length),
            4000
        );
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <section className="guarantee-page">
                {/* Carousel */}
                <div className="carousel">
                    {slides.map((url, idx) => (
                        <div
                            key={idx}
                            className={`slide${idx === current ? " active" : ""}`}
                            style={{ backgroundImage: `url(${url})` }}
                        />
                    ))}

                    {/* 导航点 */}
                    <div className="dots">
                        {slides.map((_, idx) => (
                            <span
                                key={idx}
                                className={`dot${idx === current ? " active" : ""}`}
                                onClick={() => setCurrent(idx)}
                            />
                        ))}
                    </div>
                </div>

                {/* 标题 */}
                <h2 className="section-title">橙心橙意 · 三重服务保障</h2>
                <h2 className="section-title">Sincerely Clean · Triple Service Guarantee </h2>
                {/* 保障卡片 */}
                <div className="features-grid">
                    {features.map((f, idx) => (
                        <div key={idx} className="feature-card">
                            <img src={f.icon} alt="" className="feature-icon" />
                            <h3 className="feature-title">{f.title}</h3>
                            <h3 className="feature-title">{f.titleEn}</h3>
                            <p className="feature-text">{f.text}</p>
                            <p className="feature-text">{f.textEn}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 公共页脚 */}
            <Footer />
        </>
    );
}
