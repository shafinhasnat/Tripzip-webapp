import React from "react";
import "../../static/profile.css";
const Form = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={props.onSubmit}>
        <input
          className="form-style"
          type="text"
          id={props.id}
          onChange={props.onChange}
          value={props.value}
          placeholder="Your input"
        />
        <button
          className="btn btn-light rounded-pill submit-button"
          type="submit"
          id={props.id}
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};
export default Form;
