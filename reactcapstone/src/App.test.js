import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Renders the Number of Guests label', () => {
  render(<BookingForm />);
  const labelElement = screen.getByText("Number of guests");
  expect(labelElement).toBeInTheDocument();
})