import Navigation from "../layout/Navigation";
import earthmp4 from "../assets/img/Earth - 1236.mp4";

export default function About() {
  return (
    <>
      <Navigation />
      <section className="about">
        <section className="about__left">
          <h1 className="about__title">What is OSIRIS?</h1>
          <p className="about__title-text about__text">
            OSIRIS is a company specializing in online cloud storage. We believe
            in providing secure and reliable storage solutions for our
            customers.
          </p>
          <h1 className="about__history">Our History</h1>
          <p className="about__history-text about__text">
            OSIRIS was founded in 2020 by a team of experienced entrepreneurs
            who saw a need for high-quality cloud storage services. Since then,
            we have grown to serve thousands of customers around the world.
          </p>
        </section>
        <section className="about__right">
          <video className="about__video" playsInline autoPlay muted loop>
            <source src={earthmp4} type="video/mp4" />
          </video>
        </section>
      </section>
    </>
  );
}
