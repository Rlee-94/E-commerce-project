import Checkmark from "./Checkmark";

export default function FormSuccess() {
  return (
    <>
      <section className="form__success">
        <Checkmark />
        <p className="form__success-thanks">Thanks!</p>
        <p className="form__success-text">
          Your response was submitted. Please check your email for more
          information.
        </p>
      </section>
    </>
  );
}
