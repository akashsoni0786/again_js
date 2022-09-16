import React from "react";
import PropTypes from "prop-types";
import "./App.css";
const Proptyp = (props) => {
  return (
    <div>
      <div className="rows">
        <h2>1. &nbsp;&nbsp;</h2>
        <p>{props.s1}</p>
      </div>
      <div className="rows">
        <h2>2. &nbsp;&nbsp;</h2>
        {/* <p>{props.s2}</p> */}
        <p>Object Type</p>
      </div>
      <div className="rows">
        <h2>3. &nbsp;&nbsp;</h2>
        <p>Number {props.s3}</p>
      </div>
      <div className="rows">
        <h2>4. &nbsp;&nbsp;</h2>
        {/* <p>{props.s4}</p> */}
        <p>Bool Part</p>
      </div>
      <div className="rows">
        <h2>5. &nbsp;&nbsp;</h2>
        {/* <p>{props.s5}</p> */}
        <p>Function Part</p>
      </div>
      <div className="rows">
        <h2>6. &nbsp;&nbsp;</h2>
        {/* <p>{props.s6}</p> */}
        <p>Symbol Part</p>
      </div>
      <p>No error occur, check console.</p>
    </div>
  );
};
Proptyp.propTypes = {
  s1: PropTypes.string,
  s2: PropTypes.object,
  s3: PropTypes.number,
  s4: PropTypes.bool,
  s5: PropTypes.func,
  s6: PropTypes.symbol,
};
export default Proptyp;
