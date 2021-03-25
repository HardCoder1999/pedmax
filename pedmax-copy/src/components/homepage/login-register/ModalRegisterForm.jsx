import RegisterForm from "./RegisterForm";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalRegisterForm = (props) => {
  return (
    <>
      <Modal
        isOpen={props.isRegisterOpen}
        onRequestClose={() => {
          props.setRegisterOpen(false);
        }}
        style={customStyles}
      >
        <RegisterForm />
      </Modal>
    </>
  );
};

export default ModalRegisterForm;
