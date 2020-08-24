import React from 'react'
import { render, screen } from '@testing-library/react'
import { MenuPreview } from './MenuPreview'

describe('MenuPreview component', () => {
  it('renders items', () => {
    const items = [
      { id: 5, name: 'Pizza', dietaries: [] },
      { id: 7, name: 'Burger', dietaries: [] },
    ];

    render(<MenuPreview items={items} onItemRemove={() => { }} />);

    expect(screen.getByText('Pizza')).toBeInTheDocument();
    expect(screen.getByText('Burger')).toBeInTheDocument();
  });

  it('when remove item is clicked, call "onItemRemove" with relevant item', () => {
    const onItemRemove = jest.fn();
    const items = [
      { id: 5, name: 'Pizza', dietaries: [] },
      { id: 7, name: 'Burger', dietaries: [] },
    ];
    render(<MenuPreview items={items} onItemRemove={onItemRemove} />);

    screen.getAllByText('x')[1].click();

    expect(onItemRemove).toHaveBeenCalledWith(items[1]);
  });
});
