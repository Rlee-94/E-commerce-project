export default function PricingList(props) {
  return (
    <section className="pricing__list">
      <ul className="pricing__list-ul">
        <li className="pricing__list-li">{props.item1}</li>
        <li className="pricing__list-li">{props.item2}</li>
        <li className="pricing__list-li">{props.item3}</li>
        <li className="pricing__list-li">{props.item4}</li>
      </ul>
    </section>
  );
}
