import React from "react";
import "./cognitive-intelligence.styles.scss";

const analysisData = [
  {
    image: "/our-solutions/cognitive-analysis/eye_analysis.jpg",
    title: "Eyeball Analysis",
    percentage: "94.2%",
  },
  {
    image: "/our-solutions/cognitive-analysis/voice.png",
    title: "Speech Analysis",
    percentage: "86.5%",
  },
  {
    image: "/our-solutions/cognitive-analysis/words.png",
    title: "Choice of Words",
    percentage: "79.7%",
  },
];

const StatCard = ({ image, title, percentage }) => (
  <div className="stat-card">
    <img src={image} alt={title} className="stat-image" />
    <h4>{percentage}</h4>
    <p>{title}</p>
  </div>
);

const CognitiveIntelligence = () => {
  return (
    <div className="cognitive-intelligence">
      <h2>Cognitive Intelligence</h2>
      <div className="content-container">
        <div className="image-wrapper">
          <img
            src="../../../public/our-solutions/cognitive-analysis/cognitive.png"
            alt="Cognitive Analysis"
            className="main-image"
          />
        </div>
        <div className="content-wrapper">
          <p className="lead">
            Talocity uses assessment methodologies like the Big-5 Factor Model,
            also known as OCEAN Principles, developed by the global
            psycho-linguistic community based on decades of research. These are
            widely considered the gold standard of research and measure
            established building blocks of cognitive and emotional functioning.
          </p>
          <p>
            We capture these traits by measuring behavior through
            psycho-linguistics and psycho-graphics rather than asking people to
            answer MCQ questions. Measuring traits through behavior allows us to
            profile people much more accurately and in high-dimensional space.
          </p>
          <p className="fw-bold">Now, experience firsthand:</p>
          <ul className="feature-list">
            {[
              "Behavioral Insights: Better + Unbiased Data",
              "Data-Driven Decision Making",
              "Custom AI Trained on Your Top Performers",
              "Ethical AI: De-biased Algorithms",
            ].map((item, idx) => (
              <li key={idx}>
                <i className="bi bi-check-circle-fill"></i>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="stat-card-container">
        {analysisData.map((item, index) => (
          <StatCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CognitiveIntelligence;
