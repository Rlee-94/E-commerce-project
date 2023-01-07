import PricingCard from "../Pricing/PricingCard";
import PricingList from "../Pricing/PricingList";

export default function AllServices() {
  return (
    <section>
      <PricingCard
        className="silver"
        header="Free"
        price="$0"
        title="Great for starters"
        details="Perfect solution for starters who need minimal storage space."
      />
      <PricingList
        item1="1 free user subscription"
        item2=" 5 uploads / month"
        item3="File and link sharing"
        item4="50GB of free storage"
      />
      <PricingCard
        className="silver"
        header="Lite"
        price="$7.99/mo"
        title="For large storage needs"
        details="For users who need to collaborate and share large files."
      />
      <PricingList
        item1="5 user subscriptions"
        item2=" 20 uploads / month"
        item3="Automatic data backup"
        item4="150GB of free storage each"
      />
      <PricingCard
        className="green"
        header="Pro"
        price="$14.99/mo"
        title="For power users with large storage needs"
        details="For power users who need to collaborate and encrypt large files. "
      />
      <PricingList
        item1="15 user subscriptions"
        item2=" Unlimited uploads"
        item3="Automatic data backup and encryption"
        item4="1TB of free storage each"
      />
      <PricingCard
        className="green"
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
        className="black"
        header="Enterprise"
        price="$39.99/mo"
        title=" for company use"
        details="Our enterprise plan allows OS and server backups."
      />
      <PricingList
        item1="100 user subscriptions"
        item2="Unlimited uploads"
        item3="Automatic OS/Server backup and encryption"
        item4="5TB of free storage each"
      />
      <PricingCard
        className="black"
        header="Enterprise+"
        price="$59.99/mo"
        title=" for company use"
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
