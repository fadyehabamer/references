import { render, screen } from '@testing-library/react';
import App from './App';

// the CRA starter test looked for a "learn react" link this demo never renders
test('renders the functional component heading', () => {
  render(<App />);
  expect(screen.getByText(/THIS IS\s+FUNCTIONAL COMPONENT/)).toBeInTheDocument();
});
