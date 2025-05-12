import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Footer from "../components/Footer";

/* —— Banner 轮播图 —— */
const bannerImages = [
    "https://miaoda-image.cdn.bcebos.com/img/corpus/1de9aff111924baea162583000281b7e.jpg",
    "https://miaoda-image.cdn.bcebos.com/img/corpus/fc2c1a6df42c441ba441c04f86c634d4.jpg",
    "https://miaoda-image.cdn.bcebos.com/img/corpus/a47f7b98dac24afaa847308d18955e48.jpg"
];

/* —— 客户画廊（左右切换） —— */
const galleryImages = [
    "https://miaoda-image.cdn.bcebos.com/img/corpus/69ad1eec1a934335b8603f409e14942f.jpg",
    "https://miaoda-image.cdn.bcebos.com/img/corpus/3f32599ea60841c78ad26b1aeb009ae9.jpg",
    "https://miaoda-image.cdn.bcebos.com/img/corpus/4fcb48ba930e48719936404fddddc33b.jpg",
    "https://miaoda-image.cdn.bcebos.com/img/corpus/46a2c86c29fe4d1da028538bddf3d30d.jpg",
    "https://miaoda-image.cdn.bcebos.com/img/corpus/18f8864a2d7c4a0ca8b6b49f9f9ba4f6.jpg",
    "https://miaoda-image.cdn.bcebos.com/img/corpus/bedfae8fe92946e6beaeb6f532436120.jpg"
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
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>98% 推荐率</h3>
                        <p>超过 300 户珀斯家庭愿意把我们介绍给邻居。</p>
                    </div>
                    <div className="feature-card">
                        <h3>WA Police Cleared</h3>
                        <p>所有团队成员通过西澳警方背景核查，安全放心。</p>
                    </div>
                    <div className="feature-card">
                        <h3>透明定价</h3>
                        <p>日常清洁 $100/hr 起，深度清洁 $700 起，0 隐形收费。</p>
                    </div>
                    <div className="feature-card">
                        <h3>48 h 质量保障</h3>
                        <p>两日内免费返工；200 万澳元公共责任险全程护航。</p>
                    </div>
                </div>
            </section>

            {/* 客户案例 */}
            <section className="cases">
                {[
                    {
                        img: "https://miaoda-image.cdn.bcebos.com/img/corpus/69ad1eec1a934335b8603f409e14942f.jpg",
                        title: "Swan River 滨河别墅",
                        desc: "月度庭院维护 + 落叶清理，客户满意度 ★★★★★"
                    },
                    {
                        img: "https://miaoda-image.cdn.bcebos.com/img/corpus/3f32599ea60841c78ad26b1aeb009ae9.jpg",
                        title: "Fremantle 海滨咖啡馆",
                        desc: "深度室外高压冲洗，营业前 24 h 完成交付"
                    },
                    {
                        img: "https://miaoda-image.cdn.bcebos.com/img/corpus/4fcb48ba930e48719936404fddddc33b.jpg",
                        title: "Joondalup 家庭泳池",
                        desc: "每周水质检测 + 设备保养，全年保持晶莹见底"
                    }
                ].map((c, i) => (
                    <div key={i} className={`case-item ${i % 2 ? "reverse" : ""}`}>
                        <img src={c.img} alt={c.title} className="case-image" />
                        <div className="case-content">
                            <h3 className="case-title">{c.title}</h3>
                            <p className="case-desc">{c.desc}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* 页脚 */}
            <Footer />
        </div>
    );
}
