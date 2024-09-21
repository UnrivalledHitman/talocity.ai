import "./sentiment-analysis.styles.scss";

const content = {
  title: "Cognitive Intelligence",
  subtitle: "Data made smarter with Sentiment Analysis",
  description: `
    Combining machine learning and artificial intelligence, we understand the
    tonality of conversations (positive, negative, or neutral), emotions, and
    sentiments displayed by the individual through facial and tonal analysis.
    We can analyze any unstructured or structured data through any communication
    channel. The engine uses linguistic analysis and facial analysis to detect
    emotional and language tones such as joy, fear, sadness, anger, analytical,
    confident, and tentative tones.
  `,
  imageSrc: "/src/assets/our-solutions/sentiment-analysis/OIP.jpeg",
  altText: "Sentiment Analysis",
};

const SentimentAnalysis = () => {
  return (
    <section className="sentiment-analysis">
      <div className="container-fluid">
        <div className="text-center">
          <h2>{content.title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="image-container">
              <img
                src={content.imageSrc}
                alt={content.altText}
                className="img-fluid rounded"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <h3>{content.subtitle}</h3>
            <p>{content.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SentimentAnalysis;
