import Checkmark from "./Checkmark";

export default function FormSuccess() {
  return (
    <>
      <section className="form__success">
        <Checkmark />
        <p className="form__success-thanks">Thanks!</p>
        <p className="form__success-text">
          Your response was submitted. Someone from our team will reach out to
          you shortly.
        </p>
      </section>
    </>
  );
}
