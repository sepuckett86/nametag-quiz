// Presentational/Functional component
// Color input to change font color
// Color input to change background color

import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ handleChange, color, backgroundColor }) {
  return (
    <>
    <label>
      Font Color: <input name="color" type="color" value={color} onChange={handleChange}></input>
    </label>
    <label>
      Background Color: <input name="backgroundColor" type="color" value={backgroundColor} onChange={handleChange}></input>
    </label>
    </>
  );
}

ColorSelector.propTypes = {
  handleChange: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default ColorSelector;
