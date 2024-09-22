import React from "react";
import "./our-products.styles.scss";

const productData = [
  {
    heading: "One Way Video Interviews",
    text: "Assess candidates' personality, proficiency, motivation, and expertise in a single interview without meeting them. Our psycholinguistic and psycho-graphics algorithms along with NLP and ML do the work while you focus on candidate WOW.",
  },
  {
    heading: "Voice Assessment",
    text: "Evaluate candidates' pronunciation, fluency, active listening, listening comprehension, vocabulary, and grammar instantaneously. Our system supports multiple native accents and uses machine learning to evaluate voice skills.",
  },
  {
    heading: "Assessment Platform",
    text: "Forget paper-based assessments and no longer depend on ready-made solutions that don't fit your exact needs. Tailor your own assessments using our intuitive and configurable multi-section assessment platform and start screening talent within minutes.",
  },
  {
    heading: "Typing Assessment",
    text: "Analyze typing speeds of individuals as the machine automatically adjusts the difficulty levels, providing you with Real-Time Analytics Reports. Use our Artificial Intelligence engine to map typing patterns and detect accurate typing speeds.",
  },
  {
    heading: "ATS",
    text: "Create and manage the recruiting and hiring process along with job applications. Paying for ATS stage/workflow customization is so passé. Now sift candidates, schedule interviews, and issue notification alerts at unprecedented speeds.",
  },
  {
    heading: "All Seeing Eye",
    text: "Detect fraudulent individual assessment activity with certainty, while providing candidates with a 100% seamless and unobtrusive experience. Our system is fully automated and always monitors suspicious activity using advanced video and audio analytics.",
  },
];

const OurProducts = () => {
  return (
    <div className="our-products">
      <h2>OUR PRODUCTS</h2>
      <div className="content-container">
        {productData.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="image-wrapper">
              <img
                src={`/src/assets/our-products/${index + 1}.jpg`}
                alt={`Product ${index + 1}`}
              />
            </div>
            <div className="content-wrapper">
              <h3>{product.heading}</h3>
              <p className="lead">{product.text}</p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
