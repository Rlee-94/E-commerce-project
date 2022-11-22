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
        <label>Subscribe for the latest BRAND news</label>
        <input type="email" name="email" className="footer__email"></input>
        <input type="submit">Subscribe</input>
      </div>
    </footer>
  );
}
