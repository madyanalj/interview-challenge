import React from 'react';
import { Dietary } from './Dietary';
import { ITEM_PROP_TYPE } from '../../models/item';

export const Item = ({ item }) => (
  <div className="item">
    <h2>{item.name}</h2>
    <p>
      {item.dietaries.map((dietary) => (
        <Dietary abbreviation={dietary} key={dietary} />
      ))}
    </p>
  </div>
);

Item.propTypes = {
  item: ITEM_PROP_TYPE,
};
