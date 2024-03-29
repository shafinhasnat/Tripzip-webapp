import React from "react";
import { connect } from "react-redux";
import ToggleModal from "./../common/toggleModal";
import { signinModal } from "./../../actions/authAction";
import "../static/index.css";
const Index = (props) => {
  const openModal = () => {
    props.signinModal(true);
  };
  const { auth } = props;
  return (
    <div>
      <div style={{ paddingBottom: "50px" }}>
        <img
          id="NoPath"
          src="https://i.ibb.co/2dY3S0L/NoPath.png"
          alt="NoPath"
          border="0"
        />
        {auth ? null : (
          <div>
            <button
              className="btn btn-light rounded-pill signup-button"
              onClick={openModal}
            >
              Sign Up
            </button>
            <ToggleModal />
          </div>
        )}
        <div id="Get_Mingle">
          <span>Get Mingle</span>
        </div>
        <div id="Enjoy_Your_Trip">
          <span>Enjoy Your Trip</span>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div id="Group_4">
            <div id="ic_group_add_24px" className="ic_group_add_24px">
              <svg className="ic_group_add_24px_bu" viewBox="0 5 101.2 72.8">
                <path
                  id="ic_group_add_24px_bu"
                  d="M 33.73332214355469 33.00002288818359 L 21.08332443237305 33.00002288818359 L 21.08332443237305 16.20000839233398 L 12.64999580383301 16.20000839233398 L 12.64999580383301 33.00002288818359 L 0 33.00002288818359 L 0 44.20002746582031 L 12.64999580383301 44.20002746582031 L 12.64999580383301 61.00004196166992 L 21.08332443237305 61.00004196166992 L 21.08332443237305 44.20002746582031 L 33.73332214355469 44.20002746582031 L 33.73332214355469 33.00002288818359 Z M 75.89997863769531 38.60002899169922 C 82.89964294433594 38.60002899169922 88.50779724121094 31.09601783752441 88.50779724121094 21.80001258850098 C 88.50779724121094 12.50401020050049 82.89964294433594 5.000000476837158 75.89997863769531 5.000000476837158 C 74.55063629150391 5.000000476837158 73.24347686767578 5.280002117156982 72.06281280517578 5.784000873565674 C 74.46630096435547 10.32000541687012 75.85780334472656 15.80800724029541 75.85780334472656 21.80001258850098 C 75.85780334472656 27.79201698303223 74.42414093017578 33.22401809692383 72.06281280517578 37.8160285949707 C 73.24347686767578 38.32002639770508 74.55063629150391 38.60002899169922 75.89997863769531 38.60002899169922 Z M 54.81664657592773 38.60002899169922 C 61.81630706787109 38.60002899169922 67.42446899414063 31.09601783752441 67.42446899414063 21.80001258850098 C 67.42446899414063 12.50401020050049 61.81630706787109 5.000000476837158 54.81664657592773 5.000000476837158 C 47.81697845458984 5.000000476837158 42.16664886474609 12.50401020050049 42.16664886474609 21.80001258850098 C 42.16664886474609 31.09601783752441 47.81697845458984 38.60002899169922 54.81664657592773 38.60002899169922 Z M 82.73097229003906 50.69604110717773 C 86.23079681396484 54.78403472900391 88.54995727539063 59.99204254150391 88.54995727539063 66.60003662109375 L 88.54995727539063 77.800048828125 L 101.1999588012695 77.800048828125 L 101.1999588012695 66.60003662109375 C 101.1999588012695 57.97604751586914 91.20645141601563 52.65603637695313 82.73097229003906 50.69604110717773 Z M 54.81664657592773 49.80004119873047 C 46.38331604003906 49.80004119873047 29.51665687561035 55.40003967285156 29.51665687561035 66.60003662109375 L 29.51665687561035 77.800048828125 L 80.11663818359375 77.800048828125 L 80.11663818359375 66.60003662109375 C 80.11663818359375 55.40003967285156 63.24997711181641 49.80004119873047 54.81664657592773 49.80004119873047 Z"
                ></path>
              </svg>
            </div>
            <div id="Get_Mingle_bv">
              <span>Get Mingle</span>
            </div>
            <div id="Find_your_travel_buddy_and_mee">
              <span>
                Find your travel buddy and meet your connection from other
                corner of the world
              </span>
            </div>
          </div>
        </div>
        <div className="col">
          <img
            id="NoPath_-_Copy"
            src="https://i.ibb.co/JjT1ynY/No-Path-Copy.png"
            alt="No-Path-Copy"
            border="0"
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signinModal: (payload) => dispatch(signinModal(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
