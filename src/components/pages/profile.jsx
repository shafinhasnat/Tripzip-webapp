import React from "react";
import { connect } from "react-redux";
import UserInfo from "./../common/userInfo";
import { logout } from "./../../actions/authAction";
import { useHistory } from "react-router-dom";
import "../static/profile.css";
const Profile = (props) => {
  const history = useHistory();
  const onLogout = () => {
    console.log("logout pressed");
    props.logout();
    history.push("/");
  };
  const {
    uid,
    name,
    image,
    gender,
    birthday,
    email,
    location,
    interest,
    profession,
    motto,
  } = props.data;
  return (
    <div>
      <h1>Profile page</h1>
      <div className="container">
        <div className="row">
          <div className="col-4 left-profile">
            <img src={image} className="profile-pic rounded-circle" />
            <div className="row" style={{ padding: "25px" }}>
              <table className="info-table">
                <tr>
                  <td className="table-title">Name</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td className="table-title">Date of Birth</td>
                  <td>{birthday}</td>
                </tr>
                <tr>
                  <td className="table-title">Gender</td>
                  <td>{gender}</td>
                </tr>
                <tr>
                  <td className="table-title">Profession</td>
                  <td>{profession}</td>
                </tr>
                <tr>
                  <td className="table-title">Email</td>
                  <td>{email}</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-7 right-profile">d</div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={onLogout}>
        logout
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.userInfo,
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
