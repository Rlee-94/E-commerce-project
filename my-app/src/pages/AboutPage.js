import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import cloudDiagram from "../assets/img/Cloud diagram.png";
import cloudPhoto from "../assets/img/about-cloud-storage.jpeg";
import MoreServicesButton from "../components/Pricing/PricingServices/MoreServicesButton";

export default function About() {
  return (
    <>
      <Navigation />
      <section className="about">
        <section className="about__left">
          <h1 className="about__title">What is OSIRIS?</h1>
          <p className="about__text">
            Osiris is a company specializing in online cloud storage. We believe
            in providing secure and reliable storage solutions for our
            customers.
          </p>
          <h1 className="about__history">Our History</h1>
          <p className="about__history-text about__text">
            Osiris was founded in 2020 by a team of experienced entrepreneurs
            who saw a need for high-quality cloud storage services. Since then,
            we have grown to serve thousands of customers around the world.
          </p>
        </section>
        <section className="about__right">
          <img className="about__photo" src={cloudPhoto} alt="cloud storage" />
        </section>

        <section className="about__works">
          <h1 className="about__title">How We Work</h1>
          <p className="about__text">
            Osiris hosts thousands of cloud servers across the globe that will
            securely backup your data on any device. We can be used for personal
            data such as documents, pictures, and music on a laptop. Our
            enterprise plan will allow you to backup company data such as,
            operating systems, databases, and servers. Your data is guaranteed
            to stay confidential.
          </p>
          <img
            className="about__works-photo"
            src={cloudDiagram}
            alt="Cloud Diagram"
          />
        </section>
        <MoreServicesButton />
      </section>
      <Footer />
    </>
  );
}
