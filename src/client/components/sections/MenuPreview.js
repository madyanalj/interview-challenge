import React from 'react';
import PropTypes from 'prop-types';
import { Item } from '../shared/Item';
import { ITEM_PROP_TYPE } from '../../models/item';

export const MenuPreview = ({ items, onItemRemove }) =>
  <>
    <h2>Menu preview</h2>
    <ul className="menu-preview">
      {items.map((item) => (
        <li key={item.id.toString()}>
          <Item item={item} />
          <button className="remove-item" onClick={() => onItemRemove(item)}>x</button>
        </li>
      ))}
    </ul>
  </>;

MenuPreview.propTypes = {
  items: PropTypes.arrayOf(ITEM_PROP_TYPE).isRequired,
  onItemRemove: PropTypes.func.isRequired,
};
