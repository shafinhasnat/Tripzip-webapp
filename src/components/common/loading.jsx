import React from "react";
import { connect } from "react-redux";
import "../static/loading.css";
const Loading = () => {
  return (
    <React.Fragment>
      <div id="loader"></div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return { loading: state.loading };
};
export default connect(mapStateToProps)(Loading);
