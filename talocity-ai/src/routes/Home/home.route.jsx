import HeroSection from "../../components/hero-section/hero-section.component";
import ClientCarousel from "../../components/client-carousel/client-carousel.component";
import OurSolutions from "../../components/our-solutions/our-solutions";
import OurProducts from "../../components/our-products/our-products.components";
import ClientsFeedback from "../../components/clients-feedback/clients-feedback.components";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ClientCarousel />
      <OurSolutions />
      <OurProducts />
      <ClientsFeedback />
    </div>
  );
};

export default Home;
