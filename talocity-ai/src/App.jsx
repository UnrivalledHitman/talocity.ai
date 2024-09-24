import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation-bar/navigation-bar.component";
import Home from "./routes/Home/home.route";
import ContactUs from "./routes/ContactUs/contact_us.route";
import CTA from "./components/cta-button/cta-button.component";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <CTA />

      <Footer />
    </div>
  );
};

export default App;
