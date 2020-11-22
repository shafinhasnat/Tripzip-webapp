import React from "react";
import { connect } from "react-redux";
import { modal } from "./../../../actions/authAction";
import ProfileModalMarkup from "./profileModalMarkup";
const ToggleProfileModal = (props) => {
  const openModal = (a) => {
    props.modal(a, true);
  };
  return (
    <div>
      <button
        className="btn btn-light btn-sm rounded-pill add-button"
        onClick={() => openModal(props.modalType)}
      >
        Add+
      </button>
      <ProfileModalMarkup
        modalType={props.modalType}
        isOpen={props.isOpen}
        content={props.content}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    modal: (a, payload) => dispatch(modal(a, payload)),
  };
};
export default connect(null, mapDispatchToProps)(ToggleProfileModal);
