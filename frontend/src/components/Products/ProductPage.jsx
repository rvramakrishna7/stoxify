import React from "react";
import HeroSection from "./HeroSection";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function ProductPage() {
  return (
    <>
      <HeroSection />

      <LeftSection
        imageUrl="/media/images/ProductInfo.png"
        heading="Stoxify App"
        para="Our lightning-fast flagship trading platform offers real-time market data, powerful charting tools, and a sleek user interface. Experience the full power of Stoxify seamlessly across both Android and iOS devices."
        googleplay="/media/images/google-play-badge.svg"
        appstore="/media/images/appstore-badge.svg"
      />

      <RightSection
        heading="Stoxify Web"
        para="Your all-in-one dashboard for managing your Stoxify account. Unlock detailed insights into your trades and investments with powerful reports and intuitive visualizations."
        imageUrl="/media/images/StoxifyDashboard.png"
      />

      <LeftSection
        imageUrl="/media/images/products-mf.png"
        heading="Stoxify Mutual Funds"
        para="Invest in direct mutual funds online with zero commission, seamlessly credited to your Demat account. Experience smooth and hassle-free investing on both Android and iOS devices with Stoxify."
        googleplay="/media/images/google-play-badge.svg"
        appstore="/media/images/appstore-badge.svg"
      />

      <RightSection
        heading="Stoxify Connect API"
        para="Create robust trading platforms and seamless user experiences using our easy-to-integrate HTTP/JSON APIs. If you're a startup, develop your investment app and connect with Stoxify’s growing community of investors."
        imageUrl="/media/images/api.svg"
      />

      <LeftSection
        imageUrl="/media/images/education-products.png"
        heading="Stoxify Learning"
        para="A beginner-friendly collection of stock market lessons, packed with detailed explanations and visual guides. Learn at your own pace with bite-sized cards designed for quick and easy understanding—anytime, anywhere."
        googleplay="/media/images/google-play-badge.svg"
        appstore="/media/images/appstore-badge.svg"
      />
    </>
  );
}

export default ProductPage;
