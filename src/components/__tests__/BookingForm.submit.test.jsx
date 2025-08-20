import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../BookingForm.jsx';

test('submits reservation payload when form is valid', () => {
  const onSubmitReservation = jest.fn();
  render(
    <BookingForm
      availableTimes={['17:00', '18:00']}
      dispatchAvailableTimes={jest.fn()}
      onSubmitReservation={onSubmitReservation}
      onDateChange={jest.fn()}
    />
  );

  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2025-08-19' } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '18:00' } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '3' } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'cumpleaños' } });

  fireEvent.click(screen.getByRole('button', { name: /submit reservation/i }));

  expect(onSubmitReservation).toHaveBeenCalledTimes(1);
  expect(onSubmitReservation).toHaveBeenCalledWith({
    date: '2025-08-19',
    time: '18:00',
    guests: 3,
    occasion: 'cumpleaños',
  });
});
