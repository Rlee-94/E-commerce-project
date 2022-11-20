import PricingCard from "../components/Pricing/PricingCard";
import PricingOptions from "../components/Pricing/PricingOptions";

export default function Pricing() {
  return (
    <section>
      <PricingCard
        className="gray"
        header="Free"
        price="$0"
        title="Great for starters"
        details="Perfect solution for starters who need minimal storage space."
      />
      <PricingCard
        className="green"
        header="Lite"
        price="$7/mo"
        title="For large storage needs"
        details="For users who need to collaborate and share large files."
      />
      <PricingOptions />
    </section>
  );
}
