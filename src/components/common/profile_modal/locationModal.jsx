import React from "react";
import ProfileModalMarkup from "./profileModalMarkup";
import { connect } from "react-redux";
import { locationModal } from "./../../../actions/authAction";
const LocationModal = (props) => {
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

const mapDispatchToProps = (dispatch) => {
  return {
    locationModal: (payload) => dispatch(locationModal(payload)),
  };
};
export default connect(null, mapDispatchToProps)(LocationModal);
