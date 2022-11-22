import "./scss/styles.scss";
import Navigation from "./layout/Navigation";
import Hero from "./layout/Hero";
import Main from "./layout/Main";
import Reviews from "./layout/Reviews";
import Pricing from "./layout/Pricing";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Main />
      <Pricing />
      <Reviews />
    </div>
  );
}

export default App;
