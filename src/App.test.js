import { render, screen } from '@testing-library/react';
import Landing from './composants/Landing';

test('renders learn react link', () => {
  render(<Landing />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
