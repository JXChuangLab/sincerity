import React from "react";
import "./ServerPage.css";
import ImageDescription from "../components/ImageDescription";
import Footer from "../components/Footer";

export default function ServerPage() {
    return (
        <>
            <section className="pricing-page">
                {/* Banner */}
                <section className="banner">
                    <img
                        src="https://miaoda-image.cdn.bcebos.com/img/corpus/1de9aff111924baea162583000281b7e.jpg"
                        alt="Banner"
                        className="banner-image"
                    />
                    <div className="banner-overlay">
                        <div className="banner-content">
                            <h1 className="banner-title">Transparent Pricing<br />价格公开透明</h1>
                            <p className="banner-tagline">
                                0 隐藏费用，先报价再服务，消费一目了然
                            </p>
                        </div>
                    </div>
                </section>

                {/* 标题 */}
                <h2 className="section-title">服务产品</h2>
                <h2 className="section-title">Service Products</h2>

                {/* 价目列表 */}
                <div className="service-list">
                    <ImageDescription
                        imageSrc="https://miaoda-img.cdn.bcebos.com/img/corpus/388971bb406545199f4756a1aa1adc21.jpg"
                        title="日常清洁 | Regular Cleaning"
                        price="$100/小时"
                        priceDetail="2小时起 · $100/hour · 2 hr min"
                        features={[
                            { cn: "吸尘除尘", en: "Vacuum & dust" },
                            { cn: "厨房消毒", en: "Kitchen sanitise" },
                            { cn: "垃圾清运", en: "Bin emptying" }
                        ]}
                        imagePosition="left"
                    />

                    <ImageDescription
                        imageSrc="https://miaoda-img.cdn.bcebos.com/img/corpus/388971bb406545199f4756a1aa1adc21.jpg"
                        title="深度清洁 | Deep Cleaning"
                        price="4居室别墅 $700+"
                        priceDetail="From $700 · 4‑bed house"
                        features={[
                            { cn: "烤箱深度除油", en: "Oven degrease" },
                            { cn: "地毯蒸汽清洁", en: "Carpet steam" },
                            { cn: "全屋杀菌", en: "Full disinfection" }
                        ]}
                        imagePosition="right"
                    />

                    <ImageDescription
                        imageSrc="https://miaoda-img.cdn.bcebos.com/img/corpus/388971bb406545199f4756a1aa1adc21.jpg"
                        title="特色服务 | Specialty Services"
                        price="价格优惠 · Value Deals"
                        features={[
                            { cn: "退租清洁 $800（含报告）", en: "End of Lease $800+" },
                            { cn: "泳池维护 $120/小时", en: "Pool Care $120/hr" },
                            { cn: "矿业家庭套餐 $300/月", en: "FIFO Package $300/mo" }
                        ]}
                        imagePosition="left"
                    />
                </div>
            </section>

            {/* 公共页脚 */}
            <Footer />
        </>
    );
}
