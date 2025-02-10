import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./containers/Hero/Hero";
import Features from "./containers/Features/Features";
import Apply from "./containers/Apply/Apply";
import Contact from "./containers/Contact/Contact";
import CTA from "./containers/CTA/CTA";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="flex-wrapper">
      <Navbar />
      <Hero />
      <Features />
      <Apply />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
