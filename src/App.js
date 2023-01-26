import Hero from "./sections/Hero/Hero";
import Header from "./components/Header/Header";
import Benefits from "./sections/Benefits/Benefits";
import Usage from "./sections/Usage/Usage";
import Footer from "./components/Footer/Footer";
import Testimonials from "./sections/Testimonials/Testimonials";
import CTAModal from "./sections/CTAModal/CTAModal";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Benefits />
      <Usage />
      <Testimonials />
      <CTAModal />
      <Footer />
    </div>
  );
}

export default App;
