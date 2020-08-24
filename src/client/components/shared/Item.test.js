import React from 'react'
import { render, screen } from '@testing-library/react'
import { Item } from './Item'

describe('Item component', () => {
  it('renders name', () => {
    const item = { id: 5, name: 'Pizza', dietaries: [] };

    render(<Item item={item} />);

    expect(screen.getByText('Pizza')).toBeInTheDocument();
  });

  it('renders dietaries', () => {
    const item = { id: 5, name: 'Pizza', dietaries: ['v', 'n!'] };

    render(<Item item={item} />);

    expect(screen.getByText('v')).toBeInTheDocument();
    expect(screen.getByText('n!')).toBeInTheDocument();
  });

  it('when item clicked, call passed "onClick" function', () => {
    const onClick = jest.fn();
    const item = { id: 5, name: 'Pizza', dietaries: [] };
    render(<Item item={item} onClick={onClick} />);

    screen.getByText('Pizza').click();

    expect(onClick).toHaveBeenCalled();
  });
});
