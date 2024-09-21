import CognitiveIntelligence from "../cognitive-intelligence/cognitive-intelligence.components";
import SentimentAnalysis from "../sentiment-analysis/sentiment-analysis.component";
import SpeechAnalysis from "../speech-analysis/speech-analysis.component";
import "./our-solutions.styles.scss";

const OurSolutions = () => {
  return (
    <div>
      <h1 className="white-text">Our Solutions</h1>
      <CognitiveIntelligence />
      <SentimentAnalysis />
      <SpeechAnalysis />
    </div>
  );
};

export default OurSolutions;
