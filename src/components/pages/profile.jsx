import React from "react";
import { connect } from "react-redux";
import { logout } from "./../../actions/authAction";
import { useHistory } from "react-router-dom";
import "../static/profile.css";
import CreateIcon from "@material-ui/icons/Create";
const Profile = (props) => {
  const history = useHistory();
  const onLogout = () => {
    console.log("logout pressed");
    props.logout();
    history.push("/");
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
                      <button className="btn btn-light btn-sm rounded-pill add-button">
                        Add+
                      </button>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="table-title">Gender</td>
                  <td>
                    {gender ? (
                      gender
                    ) : (
                      <button className="btn btn-light btn-sm rounded-pill add-button">
                        Add+
                      </button>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="table-title">Location</td>
                  <td>
                    {location ? (
                      location
                    ) : (
                      <button className="btn btn-light btn-sm rounded-pill add-button">
                        Add+
                      </button>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="table-title">Profession</td>
                  <td>
                    {profession ? (
                      profession
                    ) : (
                      <button className="btn btn-light btn-sm rounded-pill add-button">
                        Add+
                      </button>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="table-title">Interest</td>
                  <td>
                    {interest ? (
                      interest
                    ) : (
                      <button className="btn btn-light btn-sm rounded-pill add-button">
                        Add+
                      </button>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="table-title">Motto</td>
                  <td>
                    {motto ? (
                      motto
                    ) : (
                      <button className="btn btn-light btn-sm rounded-pill add-button">
                        Add+
                      </button>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="table-title">Email</td>
                  <td>
                    {email ? (
                      email
                    ) : (
                      <button className="btn btn-light btn-sm rounded-pill add-button">
                        Add+
                      </button>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="table-title">Social Media Links</td>
                  <td>
                    {location ? (
                      location
                    ) : (
                      <button className="btn btn-light btn-sm rounded-pill add-button">
                        Add+
                      </button>
                    )}
                  </td>
                </tr>
              </table>

              <button className="btn btn-light rounded-pill submit-button">
                Save
              </button>
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
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
