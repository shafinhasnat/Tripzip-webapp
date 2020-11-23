import React from "react";
import { connect } from "react-redux";
const ProfileStrength = (props) => {
  const getProfileStrength = () => {
    const thing = Object.values(props.userInfo).filter((e) => e !== null);
    const result = (thing.length * 100) / 11;
    console.log(thing.length);
    return result;
  };
  return (
    <React.Fragment>
      <div style={{ padding: "0px 0px 5px 0px", fontWeight: "bold" }}>
        Profile Strength ({parseInt(getProfileStrength())}%)
      </div>
      <div
        id="outline"
        style={{ width: "100%", backgroundColor: "#ddd", borderRadius: "20px" }}
      >
        <div
          id="progress"
          style={{
            width: `${getProfileStrength()}%`,
            backgroundColor: "#4CAF50",
            height: "30px",
            borderRadius: "20px",
          }}
        ></div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  };
};
export default connect(mapStateToProps)(ProfileStrength);
