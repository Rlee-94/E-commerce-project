import Pricing from "../../layout/Pricing";
import PricingCard from "../Pricing/PricingCard";
import PricingList from "../Pricing/PricingList";

export default function AllServices() {
  return (
    <section>
      <Pricing />
      <PricingCard
        className="black"
        header="Pro+"
        price="$20.99/mo"
        title="For power users with large storage needs."
        details="Pro+ adds an additional 10 Pro subscriptions and more storage at a discounted price. "
      />
      <PricingList
        item1="25 user subscriptions"
        item2="Unlimited uploads"
        item3="Automatic data backup and encryption"
        item4="2.5 TB of free storage each"
      />
      <PricingCard
        className="green-black"
        header="Enterprise"
        price="$39.99/mo"
        title="Enterprise subscription for company use"
        details="Our enterprise plan allows OS and server backups."
      />
      <PricingList
        item1="100 user subscriptions"
        item2="Unlimited uploads"
        item3="Automatic OS/Server backup and encryption"
        item4="5TB of free storage each"
      />
      <PricingCard
        className="green-black"
        header="Enterprise+"
        price="$59.99/mo"
        title="Enterprise subscription for company use"
        details="Our enterprise+ plan allows OS and server backups and includes more subscriptions and storage at a discounted price."
      />
      <PricingList
        item1="300 user subscriptions"
        item2="Unlimited uploads"
        item3="Automatic OS/Server backup and encryption"
        item4="8TB of free storage each"
      />
    </section>
  );
}
