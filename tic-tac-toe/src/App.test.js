import { render, screen } from '@testing-library/react';
import App from './App';

test('renders 9 buttons', () => {
  render(<App />);
  const buttons = screen.queryAllByRole('button');
  expect(buttons).toHaveLength(9);
});
