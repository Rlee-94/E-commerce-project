import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <h1 className="hero__header">The hero header will go here</h1>
          <p className="hero__text">
            This is where I will place a bunch of random hero text for the
            landing page
          </p>
          <Button />
        </div>
        <div className="hero__right">
          <img
            src="https://images.unsplash.com/photo-1510885154241-75e69f87acae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            alt="neon-hand"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
}
