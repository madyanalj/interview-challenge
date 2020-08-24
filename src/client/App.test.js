import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

jest.mock('./services/item', () => ({
  fetchItems: () => {
    const items = [
      { id: 5, name: 'Pizza', dietaries: [] },
      { id: 7, name: 'Burger', dietaries: [] },
      { id: 9, name: 'Pasta', dietaries: [] },
    ];
    return Promise.resolve(items);
  },
}));

describe('App component', () => {
  it('renders total number of selected items', async () => {
    render(<App />);

    await waitFor(() => screen.getByText('Pizza'));

    screen.getByText('Pizza').click();
    screen.getByText('Burger').click();

    expect(screen.getByText('2 items')).toBeInTheDocument();
  });
});
