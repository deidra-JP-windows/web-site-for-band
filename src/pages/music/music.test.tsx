import React from 'react';
import { render, screen } from '@testing-library/react';
import Music from './music';

test('renders learn react link', () => {
  render(<Music />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
