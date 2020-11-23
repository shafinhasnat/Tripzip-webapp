import React, { useState } from "react";
import Modal from "react-modal";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { modal } from "./../../../actions/authAction";

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
    width: "50%",
    height: "50%",
  },
};
const ProfileModalMarkup = (props) => {
  const closeModal = (modalType) => {
    props.modal(modalType, false);
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="cross">
          <CloseIcon
            fontSize="large"
            style={{ color: "#9a0036", float: "right" }}
            onClick={() => closeModal(props.modalType)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    modal: (a, payload) => dispatch(modal(a, payload)),
  };
};
export default connect(null, mapDispatchToProps)(ProfileModalMarkup);
