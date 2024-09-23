import React from "react";
import bgImage from "../../../public/hero-section/bg1.jpg";
import "./hero-section.styles.scss";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-image-container">
        <img src={bgImage} alt="Hero Background" className="hero-bg-image" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">TOUCHLESS HIRING ASSESSMENTS</h1>
        <p className="hero-subtitle">
          Remove need for human interviews <br />
          On path to enable 100M jobs and 1 billion smiles
        </p>
        <button className="btn btn-primary">Request Demo</button>
      </div>
    </div>
  );
};

export default HeroSection;
