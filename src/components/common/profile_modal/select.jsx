import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserState } from "../../../actions/authAction";
const Select = (props) => {
  const [interest, setInterest] = useState([
    "Mountain",
    "Trekking",
    "Ocean",
    "Hiking",
    "Adventure",
    "Chill",
    "Forest",
    "Urabn",
    "Food",
    "Lifestyle",
    "Extreme",
    "Wildlife",
    "Culture",
    "Religious",
    "Solo",
  ]);
  const [userInterest, setUserInterest] = useState([]);
  const pill = (title, click) => {
    return (
      <span
        className="badge badge-pill badge-secondary col"
        style={{
          margin: "5px 5px 5px 5px",
          fontSize: "15px",
          width: "80%",
        }}
        onClick={click}
      >
        {title}
      </span>
    );
  };
  const addNew = (e) => {
    userInterest.push(e);
    setUserInterest([...userInterest]);
    const filtered = interest.filter((a) => a !== e);
    setInterest(filtered);
  };
  const remove = (e) => {
    const filtered = userInterest.filter((a) => a !== e);
    setUserInterest([...filtered]);
    setInterest([...interest, e]);
  };
  const handleSubmit = () => {
    console.log(userInterest);
    const userData = { ...props.data };
    userData.interest = userInterest;
    console.log(userData);
    props.setUserState(userData);
  };
  return (
    <React.Fragment>
      <div className="container">
        <div
          style={{
            // position: "absolute",
            marginTop: "8%",
            // marginRight: "10%",
            top: "30%",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="row row-cols-6"
        >
          {userInterest.map((e) => pill(e, () => remove(e)))}
        </div>
        <div
          style={{
            position: "absolute",
            // marginLeft: "auto",
            marginLeft: "3%",
            top: "38%",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.5rem",
          }}
        >
          Select any {5 - userInterest.length} interest(s)
        </div>
        <div
          style={{
            position: "absolute",
            // marginLeft: "auto",
            marginRight: "10%",
            top: "48%",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="row row-cols-6"
        >
          {interest.map((e) =>
            pill(e, () => {
              userInterest.length < 5 ? addNew(e) : console.log();
            })
          )}
        </div>
        <button
          className="btn btn-light rounded-pill submit-button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserState: (payload) => dispatch(setUserState(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Select);
