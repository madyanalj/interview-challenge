import React from 'react'
import { render, screen } from '@testing-library/react'
import { MenuPreview } from './MenuPreview'

describe('MenuPreview component', () => {
  it('renders items', () => {
    const items = [
      { id: 5, name: 'Pizza', dietaries: [] },
      { id: 7, name: 'Burger', dietaries: [] },
    ];

    render(<MenuPreview items={items} />);

    expect(screen.getByText('Pizza')).toBeInTheDocument();
    expect(screen.getByText('Burger')).toBeInTheDocument();
  });
});
