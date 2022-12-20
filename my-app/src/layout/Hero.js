import ModalForm from "../components/Form/ModalForm";
import heroImage from "../assets/img/hero-image.jpg";

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
          <ModalForm id="hero__button" buttonText="Try free for 14 days" />
        </div>
        <div className="hero__right">
          <img src={heroImage} alt="neon-hand" className="hero__image" />
        </div>
      </div>
    </section>
  );
}
