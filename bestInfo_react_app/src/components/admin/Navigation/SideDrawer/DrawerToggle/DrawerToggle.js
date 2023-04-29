import PropTypes from 'prop-types';

import React from 'react';

import './DrawerToggle.css';

const DrawerToggle = ({ clicked }) => (
  <div
    className='DrawerToggle1'
    role="button"
    tabIndex={0}
    onKeyDown={clicked}
    onClick={clicked}
  >
    <div />
    <div />
    <div />
  </div>
);

DrawerToggle.propTypes = {
  clicked: PropTypes.func.isRequired,
};
export default DrawerToggle;
