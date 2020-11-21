import React from "react";
import firebase from "firebase";
import fire from "./../../fire";
import "../static/login.css";
import { firebaseFacebook } from "../../actions/authAction";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
const LoginFacebook = (props) => {
  const history = useHistory();
  const handleLogin = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    // console.log(provider)
    provider.addScope("user_birthday, user_gender");
    // provider.addScope("user_id");
    fire
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log("=========>", res);
        Cookies.set("accessToken", res.credential.accessToken);
        Cookies.set("birthday", res.additionalUserInfo.profile.birthday);
        Cookies.set("gender", res.additionalUserInfo.profile.gender);
      });
    props.firebaseFacebook();
    history.push("/profile");
  };

  return (
    <React.Fragment>
      <h1 className="title-login">Login</h1>
      <button className="btn btn-primary facebook-button" onClick={handleLogin}>
        Login with Facebook
      </button>
    </React.Fragment>
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
