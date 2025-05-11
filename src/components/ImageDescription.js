import React from 'react';
import './ImageDescription.css'; // 确保引入CSS文件

const ImageDescription = ({
    title,
    subtitle,
    price,
    priceDetail,
    priceEn,
    priceDetailEn,
    features = [
        { cn: "吸尘除尘", en: "Vacuuming & dusting" },
        { cn: "厨房消毒", en: "Kitchen sanitising" },
        { cn: "垃圾清运", en: "Bin emptying" }
    ],
    imageSrc = "/api/placeholder/300/300",
    imagePosition = "left" // 'left' or 'right'
}) => {
    // 根据imagePosition设置对应的CSS类
    const cardClass = `pricing-card ${imagePosition === 'right' ? 'image-right' : 'image-left'}`;

    return (
        <div className={cardClass}>
            {/* 图片部分 - 使用grid-area定位 */}
            <div className="pc-image">
                <img src={imageSrc} alt={title} />
            </div>

            {/* 价格卡片内容 - 使用grid-area定位 */}
            <div className="pc-content">
                <div className="pricing-header">
                    <h3 className="pricing-title">{title}</h3>
                    <p className="pricing-subtitle">{subtitle}</p>

                    <div className="pricing-price">
                        <span className="price">{price}</span>
                        <span className="price-detail">{priceDetail}</span>
                    </div>

                    <div className="pricing-price-en">
                        <span className="price">{priceEn}</span>
                        <span className="price-detail">{priceDetailEn}</span>
                    </div>
                </div>

                <div className="pricing-features">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-group">
                            <div className="feature-item">{feature.cn}</div>
                            <div className="feature-item-en">{feature.en}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageDescription;