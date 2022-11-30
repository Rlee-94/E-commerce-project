import ModalForm from "../Form/ModalForm";

export default function Button(props) {
  return (
    <>
      <button className={props.className}>{props.buttonText}</button>
    </>
  );
}
