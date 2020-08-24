import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

jest.mock('./services/item', () => ({
  fetchItems: () => {
    const items = [
      { id: 5, name: 'Pizza', dietaries: ['ve'] },
      { id: 7, name: 'Burger', dietaries: ['ve', 'df'] },
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

  it('renders dietary counts of selected items', async () => {
    render(<App />);

    await waitFor(() => screen.getByText('Pizza'));

    screen.getByText('Pizza').click();
    screen.getByText('Burger').click();

    const dietaryTotals = screen.getAllByTestId('dietary-total');

    expect(dietaryTotals).toHaveLength(2);
    expect(dietaryTotals[0].innerHTML.includes('2')).toBe(true);
    expect(dietaryTotals[0].innerHTML.includes('ve')).toBe(true);
    expect(dietaryTotals[1].innerHTML.includes('1')).toBe(true);
    expect(dietaryTotals[1].innerHTML.includes('df')).toBe(true);
  });
});
