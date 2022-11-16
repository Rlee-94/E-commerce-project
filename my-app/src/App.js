import "./scss/styles.scss";
import Navigation from "./layout/Navigation";
import Hero from "./layout/Hero";
import Main from "./layout/Main";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Main />
    </div>
  );
}

export default App;
