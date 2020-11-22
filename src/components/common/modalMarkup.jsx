import React from "react";
import Modal from "react-modal";
import CancelIcon from "@material-ui/icons/Cancel";
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
};
const modalMarkup = (props) => {
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="cross">
          <CancelIcon
            fontSize="large"
            style={{ color: "#9a0036", float: "right" }}
            onClick={props.closeModal}
          />
        </div>
        <div
          style={{ padding: "60px", display: "flex", justifyContent: "center" }}
        >
          {props.content}
        </div>
      </Modal>
    </div>
  );
};
export default modalMarkup;
