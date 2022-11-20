import PricingButton from "./PricingButton";

export default function PricingCard(props) {
  return (
    <section className="pricing__card">
      <div className={`pricing__card-header-${props.className} background`}>
        <h3 className="pricing__card-header">{props.header}</h3>
      </div>
      <div className="pricing__card-content">
        <h1 className="pricing__card-price">{props.price}</h1>
        <h4 className="pricing__card-title">{props.title}</h4>
        <h6 className="pricing__card-details">{props.details}</h6>
      </div>
      <PricingButton />
    </section>
  );
}
