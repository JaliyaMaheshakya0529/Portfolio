
import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-portrait">
          <img
            src="/images/portrait.png"
            alt="Jaliya Maheshakya silhouette"
            className="hero-portrait-img"
          />
        </div>

        <div className="hero-heading">
          <span className="hero-intro">I’m</span>

          <h1 className="hero-name">
            JALIYA
          </h1>

          <h2 className="hero-surname">
            Maheshakya
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
