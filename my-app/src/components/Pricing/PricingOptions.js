import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function PricingOptions() {
  const location = useLocation();

  //scroll to top of pricing page
  useEffect(() => {
    if (location.pathname === "/pricing") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="pricing__options">
      <Link to="/pricing" className="pricing__options-btn">
        See more options &rarr;
      </Link>
    </div>
  );
}
