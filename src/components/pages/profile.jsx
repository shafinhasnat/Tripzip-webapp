import React from "react";
import { connect } from "react-redux";
import { logout } from "./../../actions/authAction";
import { useHistory } from "react-router-dom";
import "../static/profile.css";
import CreateIcon from "@material-ui/icons/Create";
import ProfileStrength from "./../common/profileStrength";
import ToggleProfileModal from "./../common/profile_modal/toggleProfileModal";
import { setUserState, modal, loading } from "./../../actions/authAction";
import Form from "./../common/profile_modal/form";
import axios from "axios";
import Select from "./../common/profile_modal/select";

const Profile = (props) => {
  const history = useHistory();
  const onLogout = () => {
    console.log("logout pressed");
    props.logout();
    history.push("/");
  };
  const submitState = (e) => {
    e.preventDefault();
    const userData = { ...props.data };
    userData[e.target[0].id] = e.target[0].value;
    console.log(e.target[0].value, e.target[0].id);
    props.setUserState(userData);
  };
  const handleSubmit = (e) => {
    const userData = { ...props.data };
    props.loading(true);

    // console.log(userData.uid);
    axios
      .put(`http://127.0.0.1:5000/u/${userData.uid}`, userData)
      .then((res) => console.log(res));
    props.loading(false);
  };
  const pill = () => {
    const markup = (e) => {
      return (
        <span
          className="badge badge-pill badge-secondary col"
          style={{
            margin: "0px 5px 0px 0px",
            fontSize: ".8rem",
            width: "20%",
          }}
        >
          {e}
        </span>
      );
    };
    try {
      return interest.map((e) => markup(e));
    } catch {
      return interest
        .replace(/{|}/g, "")
        .split(",")
        .map((e) => markup(e));
    }
  };
  const {
    name,
    image,
    gender,
    birthday,
    email,
    location,
    interest,
    profession,
    motto,
    social,
  } = props.data;
  return (
    <div>
      <h1>Profile</h1>
      <div className="container">
        <div className="row">
          <div className="col-4 left-profile">
            <img src={image} className="profile-pic rounded-circle" />
            <div style={{ padding: "25px" }}>
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
              <button
                className="btn btn-light rounded-pill add-button submit-button"
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-7 right-profile">
            <div
              style={{
                backgroundColor: "white",
                // height: "10%",
                padding: "0px 10px 20px 10px ",
              }}
            >
              <ProfileStrength />
            </div>
            <div style={{ padding: "0px 20px 0px 20px" }}>
              <div className="title">
                <h1>
                  <CreateIcon style={{ fontSize: "40" }} />
                  Edit Profile
                </h1>
              </div>
              <div className="line"></div>
              <div style={{ padding: "25px" }}>
                <table className="info-table">
                  <tr>
                    <td className="table-title">Name</td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <td className="table-title">Date of Birth</td>
                    <td>
                      {birthday ? (
                        birthday
                      ) : (
                        <ToggleProfileModal
                          modalType="birthday"
                          isOpen={
                            props.isOpen ? props.isOpen.birthdayModal : false
                          }
                          content={
                            <Form
                              id="location"
                              onSubmit={submitState}
                              value={location}
                            />
                          }
                        />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="table-title">Gender</td>
                    <td>
                      {gender ? (
                        gender
                      ) : (
                        <ToggleProfileModal
                          modalType="gender"
                          isOpen={
                            props.isOpen ? props.isOpen.genderModal : false
                          }
                          content={
                            <Form
                              id="gender"
                              onSubmit={submitState}
                              value={gender}
                            />
                          }
                        />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="table-title">Location</td>
                    <td>
                      {location ? (
                        location
                      ) : (
                        <ToggleProfileModal
                          modalType="location"
                          isOpen={
                            props.isOpen ? props.isOpen.locationModal : false
                          }
                          content={
                            <Form
                              id="location"
                              onSubmit={submitState}
                              value={location}
                            />
                          }
                        />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="table-title">Profession</td>
                    <td>
                      {profession ? (
                        profession
                      ) : (
                        <ToggleProfileModal
                          modalType="profession"
                          isOpen={
                            props.isOpen ? props.isOpen.professionModal : false
                          }
                          content={
                            <Form
                              id="profession"
                              onSubmit={submitState}
                              value={profession}
                            />
                          }
                        />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="table-title">Interest</td>
                    <td>
                      {interest ? (
                        // interest.replace(/{|}/g, "").split(",")
                        pill()
                      ) : (
                        <ToggleProfileModal
                          modalType="interest"
                          isOpen={
                            props.isOpen ? props.isOpen.interestModal : false
                          }
                          content={<Select />}
                        />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="table-title">Motto</td>
                    <td>
                      {motto ? (
                        motto
                      ) : (
                        <ToggleProfileModal
                          modalType="motto"
                          isOpen={
                            props.isOpen ? props.isOpen.mottoModal : false
                          }
                          content={
                            <Form
                              id="motto"
                              onSubmit={submitState}
                              value={motto}
                            />
                          }
                        />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="table-title">Email</td>
                    <td>
                      {email ? (
                        email
                      ) : (
                        <ToggleProfileModal
                          modalType="email"
                          isOpen={
                            props.isOpen ? props.isOpen.emailModal : false
                          }
                          content={
                            <Form
                              id="email"
                              onSubmit={submitState}
                              value={email}
                            />
                          }
                        />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="table-title">Social Media Links</td>
                    <td>
                      {social ? (
                        social
                      ) : (
                        <ToggleProfileModal
                          modalType="social"
                          isOpen={
                            props.isOpen ? props.isOpen.socialModal : false
                          }
                          content={
                            <Form
                              id="social"
                              onSubmit={submitState}
                              value={social}
                            />
                          }
                        />
                      )}
                    </td>
                  </tr>
                </table>

                <button
                  className="btn btn-light rounded-pill submit-button"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.userInfo,
    isOpen: state.profileModal,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    setUserState: (payload) => dispatch(setUserState(payload)),
    modal: (a, payload) => dispatch(modal(a, payload)),
    loading: (payload) => dispatch(loading(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
