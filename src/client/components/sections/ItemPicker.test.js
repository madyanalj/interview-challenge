import React from 'react'
import { render, screen } from '@testing-library/react'
import { ItemPicker } from './ItemPicker'

describe('ItemPicker component', () => {
  it('renders items', () => {
    const items = [
      { id: 5, name: 'Pizza', dietaries: [] },
      { id: 7, name: 'Burger', dietaries: [] },
    ];

    render(<ItemPicker items={items} onItemPick={() => { }} />);

    expect(screen.getByText('Pizza')).toBeInTheDocument();
    expect(screen.getByText('Burger')).toBeInTheDocument();
  });

  it('when item picked, call passed "onItemPick" function', () => {
    const onItemPick = jest.fn();
    const items = [
      { id: 5, name: 'Pizza', dietaries: [] },
      { id: 7, name: 'Burger', dietaries: [] },
    ];
    render(<ItemPicker items={items} onItemPick={onItemPick} />);

    screen.getByText('Burger').click();

    expect(onItemPick).toHaveBeenCalledWith(items[1]);
  });
});
