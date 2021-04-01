import LoginForm from "./LoginForm";
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

const ModalLoginForm = (props) => {
  return (
      <Modal
        isOpen={props.isLoginOpen}
        onRequestClose={() => {
          props.setLoginOpen(false);
        }}
        style={customStyles}
      >
        <LoginForm />
      </Modal>
  );
};

export default ModalLoginForm;
