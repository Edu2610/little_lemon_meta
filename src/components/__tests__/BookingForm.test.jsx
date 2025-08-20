import { render, screen } from '@testing-library/react';
import BookingForm from '../BookingForm.jsx';

function renderForm(overrides = {}) {
  const defaultProps = {
    availableTimes: ['17:00', '18:00', '19:00'],
    dispatchAvailableTimes: jest.fn(),
    onSubmitReservation: jest.fn(),
    onDateChange: jest.fn(),
  };
  return render(<BookingForm {...{ ...defaultProps, ...overrides }} />);
}

test('renders the BookingForm heading', () => {
  renderForm();
  const heading = screen.getByRole('heading', { name: /reserva tu mesa/i });
  expect(heading).toBeInTheDocument();
});

test('renders the date label', () => {
  renderForm();
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toBeInTheDocument();
});
