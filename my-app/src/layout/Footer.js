import Facebook from "../components/Footer/Facebook";
import LinkedIn from "../components/Footer/Linkedin";
import Youtube from "../components/Footer/Youtube";
import Github from "../components/Footer/Github";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Cookies Policy</p>
        <p>Careers</p>
        <p>Contact Us</p>
      </div>
      <div className="footer__right">
        <Facebook />
        <LinkedIn />
        <Youtube />
        <Github />
      </div>
    </footer>
  );
}
