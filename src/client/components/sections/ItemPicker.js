import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Item } from '../shared/Item';
import { ITEM_PROP_TYPE } from '../../models/item';

export const ItemPicker = ({ items, onItemPick }) => {
  const [filter, setFilter] = useState('');
  const filteredItems = items.filter((item) => item.name.includes(filter));

  return (
    <>
      <div className="filters">
        <input
          className="form-control"
          placeholder="Name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <ul className="item-picker">
        {filteredItems.map((item) => (
          <li key={item.id.toString()}>
            <Item item={item} onClick={() => onItemPick(item)} />
          </li>
        ))}
      </ul>
    </>
  )
};

ItemPicker.propTypes = {
  items: PropTypes.arrayOf(ITEM_PROP_TYPE).isRequired,
  onItemPick: PropTypes.func.isRequired,
};
