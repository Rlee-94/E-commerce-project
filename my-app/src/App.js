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
      <Reviews
        header="BRAND makes people genuinely happy"
        quote="We've been using BRAND for the past 3 years and it has improved our effeciency by 40%! I definitely recommend purchasing BRAND for your storage needs."
        error="Your browser is not supported."
      />
    </div>
  );
}

export default App;
