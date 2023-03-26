import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the Number of Guests label', () => {
    render(<BookingForm />);
    const labelElement = screen.getByText("Number of guests");
    expect(labelElement).toBeInTheDocument();
  })