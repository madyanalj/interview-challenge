import PropTypes from 'prop-types';

export const ITEM_PROP_TYPE = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  dietaries: PropTypes.arrayOf(PropTypes.string).isRequired,
}).isRequired;
