import Checkmark from "./Checkmark";

export default function FormSuccess() {
  return (
    <>
      <section className="form__success">
        <Checkmark />
        <p className="form__success-thanks">Thanks!</p>
        <p className="form__success-text">
          We've received your request for a 14 day trial. Please check your
          email for more information.
        </p>
        <button className="form__success-close">x</button>
      </section>
    </>
  );
}
