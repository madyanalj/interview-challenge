import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchItems } from './services/item';
import { ItemPicker } from './components/sections/ItemPicker';
import { MenuPreview } from './components/sections/MenuPreview';
import { Dietary } from './components/shared/Dietary';

export default () => {
  const [availableItems, setAvailableItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchItems().then(setAvailableItems);
  }, []);

  const pickItem = (item) => {
    if (!menuItems.includes(item)) {
      setMenuItems([...menuItems, item]);
    }
  }

  const unpickItem = (item) => {
    const newMenuItems = menuItems.filter((menuItem) => menuItem !== item);
    setMenuItems(newMenuItems);
  }

  return (
    <div className="wrapper">
      <div className="menu-summary">
        <div className="container">
          <div className="row">
            <div className="col-6 menu-summary-left">
              <span>6 items</span>
            </div>
            <div className="col-6 menu-summary-right">
              6x <Dietary abbreviation="ve" />
              4x <Dietary abbreviation="v" />
              12x <Dietary abbreviation="n!" />
            </div>
          </div>
        </div>
      </div>
      <div className="container menu-builder">
        <div className="row">
          <div className="col-4">
            <ItemPicker items={availableItems} onItemPick={pickItem} />
          </div>
          <div className="col-8">
            <MenuPreview items={menuItems} onItemRemove={unpickItem} />
          </div>
        </div>
      </div>
    </div>
  )
};
