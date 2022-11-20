import PricingCard from "../components/Pricing/PricingCard";

export default function Pricing() {
  return (
    <section>
      <PricingCard
        header="Free"
        price="$0"
        title="Great for starters"
        details="Perfect solution for starters who need minimal storage space."
      />
    </section>
  );
}
