import Hero from "./sections/Hero/Hero";
import Header from "./components/Header/Header";
import Benefits from "./sections/Benefits/Benefits";
import Usage from "./sections/Usage/Usage";
import "./App.css";
import Testimonials from "./sections/Testimonials/Testimonials";

// Mobile first approach with css.

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Benefits />
      <Usage />
      <Testimonials/>
    </div>
  );
}

export default App;
