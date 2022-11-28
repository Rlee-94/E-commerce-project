import Button from "../components/Hero/HeroButton";
import ModalForm from "../components/Form/ModalForm";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <h1 className="hero__header">
            We're here for all your storage needs
          </h1>
          <p className="hero__text">
            We have all the cloud storage solutions for you at an affordable
            price for everyone. Click below to get started!
          </p>
          <Button className="hero__button" buttonText="Start Your Journey" />
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
