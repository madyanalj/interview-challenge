import React from 'react';
import PropTypes from 'prop-types';
import { Item } from '../shared/Item';
import { ITEM_PROP_TYPE } from '../../models/item';

export const ItemPicker = ({ items, onItemPick }) => (
  <ul className="item-picker">
    {items.map((item) => (
      <li key={item.id.toString()}>
        <Item item={item} onClick={() => onItemPick(item)} />
      </li>
    ))}
  </ul>
);

ItemPicker.propTypes = {
  items: PropTypes.arrayOf(ITEM_PROP_TYPE).isRequired,
  onItemPick: PropTypes.func.isRequired,
};
