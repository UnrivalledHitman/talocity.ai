import Navigation from "./components/navigation-bar/navigation-bar.component";
import HeroSection from "./components/hero-section/hero-section.component";
import ClientCarousel from "./components/client-carousel/client-carousel.component";
import OurSolutions from "./components/our-solutions/our-solutions";

const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <ClientCarousel />
      <OurSolutions />
    </div>
  );
};

export default App;
