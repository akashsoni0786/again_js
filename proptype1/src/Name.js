import React from "react";
import "./App.css";
import PropTypes from 'prop-types';
const Name = (props) => {
  return <div className="namestyle">{props.name}</div>;
};

Name.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Name;
