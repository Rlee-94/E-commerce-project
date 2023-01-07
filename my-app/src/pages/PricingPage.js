import AllServices from "../components/Services/AllServices";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main className="pricing__page">
        <section className="pricing__page-header">
          <h1 className="pricing__page-title">Choosing the Right Package</h1>
          <p className="pricing__page-text">
            We offer a number of subscriptions packages seen below. Decide which
            one is best for you and secure your data today!
          </p>
        </section>

        <AllServices />
      </main>
      <Footer />
    </>
  );
}
