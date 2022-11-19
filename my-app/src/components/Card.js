export default function Card({ Icon, title, text }) {
  return (
    <>
      <Icon />
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
    </>
  );
}
