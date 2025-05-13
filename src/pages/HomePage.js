import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Footer from "../components/Footer";

/* —— Banner 轮播图 —— */
const bannerImages = [
    "https://miaoda-image.cdn.bcebos.com/img/corpus/1de9aff111924baea162583000281b7e.jpg",
    "https://miaoda-image.cdn.bcebos.com/img/corpus/fc2c1a6df42c441ba441c04f86c634d4.jpg",
    "https://miaoda-image.cdn.bcebos.com/img/corpus/a47f7b98dac24afaa847308d18955e48.jpg"
];

export default function HomePage() {
    /* —— Banner 自动轮播 —— */
    const [bannerIdx, setBannerIdx] = useState(0);
    useEffect(() => {
        const timer = setInterval(
            () => setBannerIdx((i) => (i + 1) % bannerImages.length),
            4000
        );
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="homepage">
            {/* Banner 轮播 */}
            <section className="banner">
                {bannerImages.map((url, i) => (
                    <div
                        key={i}
                        className={`slide${i === bannerIdx ? " active" : ""}`}
                        style={{ backgroundImage: `url(${url})` }}
                    />
                ))}
                <div className="banner-overlay">
                    <div className="banner-content">
                        <h1 className="banner-title">西澳人的选择 | Proudly Serving WA</h1>
                        <p className="banner-tagline">
                            Local cleaners • 98% referral rate • WA Police Cleared
                        </p>
                    </div>
                </div>

                {/* 轮播导航点 */}
                <div className="dots">
                    {bannerImages.map((_, i) => (
                        <span
                            key={i}
                            className={`dot${i === bannerIdx ? " active" : ""}`}
                            onClick={() => setBannerIdx(i)}
                        />
                    ))}
                </div>
            </section>

            {/* 优势区 */}
            <section className="features">
                <h2 className="section-title">为什么选择我们？</h2>
                <h2 className="section-title">WHY CHOOSE US？</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>98% 推荐率 | 98% referral rate</h3>
                        <p>超过98%客户愿意推荐给邻居</p>
                        <p>Over 98% of customers are willing to recommend to their neighbors.</p>
                    </div>
                    <div className="feature-card">
                        <h3>持有WA Police Clearance | WA Police Cleared</h3>
                        <p>所有团队成员通过西澳警方背景核查，安全放心。</p>
                        <p>All team members have passed the Western Australian police background check and are safe and assured.</p>
                    </div>
                    <div className="feature-card">
                        <h3>透明定价 | Transparent pricing</h3>
                        <p>日常清洁 $100/hr 起，深度清洁 $700 起，0 隐形收费。</p>
                        <p>Daily cleaning starts at $100/hr, deep cleaning starts at $700, with no hidden charges.</p>
                    </div>
                </div>
            </section>

            {/* 客户案例 */}
            <section className="cases">
                {[
                    {
                        img: "https://miaoda-image.cdn.bcebos.com/img/corpus/69ad1eec1a934335b8603f409e14942f.jpg",
                        title: "Swan River 滨河别墅",
                        titleEn: "Swan Rivers Side Villa",
                        desc: "月度庭院维护 + 落叶清理，客户满意度 ★★★★★",
                        descEn: "Monthly courtyard maintenance+leaf removal, customer satisfaction ★★★★★."
                    },
                    {
                        img: "https://miaoda-image.cdn.bcebos.com/img/corpus/3f32599ea60841c78ad26b1aeb009ae9.jpg",
                        title: "Fremantle 海滨咖啡馆",
                        titleEn: "Seaside Cafe",
                        desc: "深度室外高压冲洗，营业前 24 h 完成交付",
                        descEn: "Deep outdoor high-pressure flushing, delivered 24 hours before operation."
                    },
                    {
                        img: "https://miaoda-image.cdn.bcebos.com/img/corpus/4fcb48ba930e48719936404fddddc33b.jpg",
                        title: "Joondalup 家庭泳池",
                        titleEn: "Joondalup Family Pool",
                        desc: "每周水质检测 + 设备保养，全年保持晶莹见底",
                        descEn: "Weekly water quality testing and equipment maintenance to maintain a crystal clear appearance throughout the year."
                    }
                ].map((c, i) => (
                    <div key={i} className={`case-item ${i % 2 ? "reverse" : ""}`}>
                        <img src={c.img} alt={c.title} className="case-image" />
                        <div className="case-content">
                            <h3 className="case-title">{c.title}</h3>
                            <h3 className="case-title">{c.titleEn}</h3>
                            <p className="case-desc">{c.desc}</p>
                            <p className="case-desc">{c.descEn}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* 页脚 */}
            <Footer />
        </div>
    );
}
