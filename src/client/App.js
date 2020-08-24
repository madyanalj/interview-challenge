import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchItems } from './services/item';
import { ItemPicker } from './components/sections/ItemPicker';
import { MenuPreview } from './components/sections/MenuPreview';
import { Dietary } from './components/shared/Dietary';
import { countEachElement } from './utils';

export default () => {
  const [availableItems, setAvailableItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchItems().then(setAvailableItems);
  }, []);

  const dietaryTotals = countEachElement(menuItems.flatMap((item) => item.dietaries));

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
              <span>{menuItems.length} items</span>
            </div>
            <div className="col-6 menu-summary-right">
              {dietaryTotals.map(([dietary, total]) =>
                <span key={dietary} data-testid="dietary-total">
                  {total}x <Dietary abbreviation={dietary} />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container menu-builder">
        <div className="row">
          <div className="col-4">
            <ItemPicker items={availableItems} onItemPick={pickItem} />
          </div>
          <div className="col-8" data-testid="menu-preview">
            <MenuPreview items={menuItems} onItemRemove={unpickItem} />
          </div>
        </div>
      </div>
    </div>
  )
};
