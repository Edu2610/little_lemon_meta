import { render, screen, within } from '@testing-library/react';
import BookingForm from '../BookingForm.jsx';

test('time <select> shows availableTimes from props', () => {
  const availableTimes = ['17:00', '18:00', '21:00'];
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatchAvailableTimes={jest.fn()}
      onSubmitReservation={jest.fn()}
      onDateChange={jest.fn()}
    />
  );

  const select = screen.getByLabelText(/choose time/i);
  const options = within(select).getAllByRole('option').map(o => o.value);
  // incluye el placeholder "" y los times
  expect(options).toEqual(expect.arrayContaining(['', '17:00', '18:00', '21:00']));
});
