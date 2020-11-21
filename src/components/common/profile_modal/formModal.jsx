import React from "react";
import ProfileModalMarkup from "./profileModalMarkup";
import { connect } from "react-redux";
import { locationModal } from "./../../../actions/authAction";
const FormModal = (props) => {
  //   const openModal = () => {
  //     props.locationModal(true);
  //   };
  const closeModal = () => {
    props.locationModal(false);
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

const mapStateToProps = (state) => {
  return {
    isOpen: state.locationModal,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    locationModal: (payload) => dispatch(locationModal(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormModal);
