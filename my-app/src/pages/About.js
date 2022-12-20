import Navigation from "../layout/Navigation";

export default function About() {
  return (
    <>
      <Navigation />
      <section>
        <h1>About OSIRIS</h1>
        <p>
          OSIRIS is a company specializing in online cloud storage. We believe
          in providing secure and reliable storage solutions for our customers.
        </p>
        <h2>Our History</h2>
        <p>
          OSIRIS was founded in 2020 by a team of experienced entrepreneurs who
          saw a need for high-quality cloud storage services. Since then, we
          have grown to serve thousands of customers around the world.
        </p>
        <h2>Our Services</h2>
        <ul>
          <li>Online cloud storage</li>
          <li>Sync and share files across devices</li>
          <li>Collaborate with team members</li>
          <li>Files are securely stored and backed up`</li>
        </ul>
      </section>
    </>
  );
}
