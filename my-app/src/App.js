import "./scss/styles.scss";
import Navigation from "./layout/Navigation";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Hero from "./layout/Hero";
import Main from "./layout/Main";
import Reviews from "./layout/Reviews";
import Pricing from "./layout/Pricing";
import Footer from "./layout/Footer";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Main />
      <Pricing />
      <Reviews />
      <Footer />
      <AboutPage />
      <PricingPage />
    </>
  );
}

export default App;
