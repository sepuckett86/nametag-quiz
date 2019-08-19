import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, color, backgroundColor }) {
  const fontStyles = {
    color
  };

  const backgroundStyles = {
    backgroundColor,
    width: '100px',
    height: '100px',
    border: '2px black solid'
  };

  return (
    <>
    <div style={backgroundStyles}>
      <p style={fontStyles}>{text}</p>
    </div>
    </>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
