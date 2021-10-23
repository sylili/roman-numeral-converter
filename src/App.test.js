import { render, screen } from '@testing-library/react';
import App from './App';

test('title is presented', () => {
  render(<App />);
  const titleEl = screen.getByText(/Arabic to roman numeral converter/i);
  expect(titleEl).toBeInTheDocument();
});
