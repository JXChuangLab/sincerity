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
        title: "不满意？48 h 内免费返工",
        text: "若服务不达标，48 小时内立刻返工，直到您满意为止。"
    },
    {
        icon: "https://miaoda-img.cdn.bcebos.com/img/corpus/7a5b3673bb7b4525a8191bdbf9b39423.jpg",
        title: "200 万澳元责任险",
        text: "每次服务均投保 A$2 million 公共责任险，为您的财产保驾护航。"
    },
    {
        icon: "https://miaoda-img.cdn.bcebos.com/img/corpus/a6c1977121984e7685dda05226c9f4dd.jpg",
        title: "员工 100% 背景核查",
        text: "所有员工通过 WA Police Clearance，专业且安全可靠。"
    },
    {
        icon: "https://miaoda-img.cdn.bcebos.com/img/corpus/f1e954d55d604159b3dc9e8dbdc7f596.jpg",
        title: "环保清洁剂",
        text: "全线选用环保配方，宠物 & 宝宝友好，守护家人健康。"
    },
    {
        icon: "https://miaoda-img.cdn.bcebos.com/img/corpus/5c74627393d248f18dc2f076af005c3f.jpg",
        title: "在线预约 · 即时确认",
        text: "微信 / WhatsApp / 官网一键下单，系统实时锁定时段。"
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
                <h2 className="section-title">橙心橙意 · 五重服务保障</h2>

                {/* 保障卡片 */}
                <div className="features-grid">
                    {features.map((f, idx) => (
                        <div key={idx} className="feature-card">
                            <img src={f.icon} alt="" className="feature-icon" />
                            <h3 className="feature-title">{f.title}</h3>
                            <p className="feature-text">{f.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 公共页脚 */}
            <Footer />
        </>
    );
}
