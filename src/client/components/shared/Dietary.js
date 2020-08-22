import React from 'react';
import PropTypes from 'prop-types';

export const Dietary = ({ abbreviation }) => (
  <span className="dietary">{abbreviation}</span>
);

Dietary.propTypes = {
  abbreviation: PropTypes.string.isRequired,
};
