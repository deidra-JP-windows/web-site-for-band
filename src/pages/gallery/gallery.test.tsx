import React from 'react';
import { render, screen } from '@testing-library/react';
import Gallery from './gallery';

test('renders learn react link', () => {
  render(<Gallery />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
