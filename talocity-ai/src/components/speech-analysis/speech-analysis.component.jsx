import "./speech-analysis.styles.scss";

const SpeechAnalysis = () => {
  return (
    <div className="speech-analysis">
      <h2>Speech Analysis</h2>
      <div className="content-container">
        <div className="content-wrapper">
          <h3>Smartest way to test spoken skills</h3>
          <p className="lead">
            Talocity provides an automated language assessment tool that offers
            the quickest and most efficient means to measure English language
            proficiency, assessing the skills needed to communicate effectively.
          </p>
          <p className="lead">
            Our AI-powered online English language assessment accurately
            evaluates and scores the voice and tone of the individual and
            supports multiple native accents of the English language for
            different demographies.
          </p>
        </div>
        <div className="image-wrapper">
          <img
            src="/our-solutions/speech-analysis/speech-analysis.png"
            alt="Speech Analysis"
            className="main-image"
          />
        </div>
      </div>
    </div>
  );
};

export default SpeechAnalysis;
