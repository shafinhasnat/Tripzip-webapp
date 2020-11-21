import React from "react";
import ProfileModalMarkup from "./profileModalMarkup";
import { connect } from "react-redux";
import { professionModal } from "../../../actions/authAction";
const ProfessionModal = (props) => {
  //   const openModal = () => {
  //     props.ProfessionModal(true);
  //   };
  const closeModal = () => {
    props.professionModal(false);
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
    professionModal: (payload) => dispatch(professionModal(payload)),
  };
};
export default connect(null, mapDispatchToProps)(ProfessionModal);
