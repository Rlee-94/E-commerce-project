import { Link } from "react-router-dom";

export default function MoreServicesButton() {
  return (
    <button className="about__button">
      <Link className="router__link router__link-black" to="/pricing">
        More About Our Services
      </Link>
    </button>
  );
}
