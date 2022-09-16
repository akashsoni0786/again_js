import React from 'react'
import './App.css';
import PropTypes from 'prop-types';

const Data = (props) => {
  return (
  <div>
    <h2>Final Data</h2>
    <div className='tables'>
      <div className='rowss'>
        <label className='details'>Name :</label>
        <label>{props.name}</label>
      </div>

      <div className='rowss'>
        <label className='details'>Marks :</label>
        <label>{props.marks}</label>
      </div>

      <div className='rowss'>
        <label className='details'>Total :</label>
        <label>{props.total}</label>
      </div>

    </div>
  </div>
  )
}
Data.propTypes = {
  name: PropTypes.string.isRequired,
  marks: PropTypes.number,
  total: PropTypes.number
};
export default Data

// function data({ name, marks = 0, total = Math.max(1, score) })