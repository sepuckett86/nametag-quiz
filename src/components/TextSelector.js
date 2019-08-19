import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ handleChange, text }) {
  return (
    <label>
      Text: <input name="text" type="text" value={text} onChange={handleChange}/>
    </label>
  );
}

TextSelector.propTypes = {
  handleChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default TextSelector;
