import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import App from './App'
import { fetchItems } from './services/item';

jest.mock('./services/item', () => ({
  fetchItems: () => Promise.resolve([]),
}));

describe('App component', () => {
  it('renders a message', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(screen.getByText('6 items')).toBeInTheDocument();
  });
});
