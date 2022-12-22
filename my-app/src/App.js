import "./scss/styles.scss";
import Navigation from "./layout/Navigation";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Hero from "./layout/Hero";
import Main from "./layout/Main";
import Reviews from "./layout/Reviews";
import Pricing from "./layout/Pricing";
import Footer from "./layout/Footer";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Main />
      <Pricing />
      <Reviews />
      <Footer />
      <About />
    </>
  );
}

export default App;
