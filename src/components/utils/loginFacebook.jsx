import React from "react";
import firebase from "firebase";
import fire from "./../../fire";
import "../../App.css";
import { firebaseFacebook } from "../../actions/authAction";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
const LoginFacebook = (props) => {
  const history = useHistory();
  const handleLogin = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    // console.log(provider)
    provider.addScope("user_birthday");
    // provider.addScope("user_id");
    fire
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const additionalData = {
          birthday: res.additionalUserInfo.profile.birthday,
          gender: res.additionalUserInfo.profile.gender,
        };
        console.log("=========>", additionalData, res);
      });
    props.firebaseFacebook();
    history.push("/profile");
  };

  return (
    <button className="btn btn-primary facebook-button" onClick={handleLogin}>
      Login with Facebook
    </button>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    firebaseFacebook: () => dispatch(firebaseFacebook()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginFacebook);
