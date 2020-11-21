import React from "react";
import ProfileModalMarkup from "./profileModalMarkup";
import { connect } from "react-redux";
import { mottoModal } from "../../../actions/authAction";
const MottoModal = (props) => {
  //   const openModal = () => {
  //     props.ProfessionModal(true);
  //   };
  const closeModal = () => {
    props.mottoModal(false);
  };
  return (
    <React.Fragment>
      <ProfileModalMarkup
        isOpen={props.isOpen}
        closeModal={closeModal}
        content={props.content}
      />
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    mottoModal: (payload) => dispatch(mottoModal(payload)),
  };
};
export default connect(null, mapDispatchToProps)(MottoModal);
