export default function Card({ Icon, title, text }) {
  return (
    <section className="card">
      <Icon />
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
    </section>
  );
}
