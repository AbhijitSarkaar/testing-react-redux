import { render, screen } from '@testing-library/react';
import App from './App';

test('render text', () => {
  render(<App />);
  const element = screen.getByText('Hi there!');
  expect(element).toBeInTheDocument();
});
