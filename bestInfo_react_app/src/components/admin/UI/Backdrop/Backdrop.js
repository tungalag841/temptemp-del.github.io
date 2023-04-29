import PropTypes from 'prop-types';
import React from 'react';

import './Backdrop.css';

const Backdrop = ({ show, clicked }) => {
  return show ? (
    <div
      className='Backdrop'
      role="button"
      tabIndex={0}
      aria-label="backDrop"
      onKeyDown={clicked}
      onClick={clicked}
    />
  ) : null;
};

Backdrop.defaultProps = {
  show: false,
};
Backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func.isRequired,
};
export default Backdrop;
