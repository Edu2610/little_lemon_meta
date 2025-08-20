import { initializeTimes, updateTimes } from '../Main.jsx';

describe('booking reducer utilities', () => {
  test('initializeTimes returns the expected initial array', () => {
    const result = initializeTimes();
    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
  });

  test('updateTimes returns same state on unknown action (identity)', () => {
    const state = ['17:00', '18:00', '19:00'];
    const next = updateTimes(state, { type: 'UNKNOWN' });
    // misma referencia y mismo contenido
    expect(next).toBe(state);
    expect(next).toEqual(state);
  });

  test('times_loaded replaces available times with payload', () => {
    const state = ['17:00', '18:00'];
    const payload = ['18:00', '20:00'];
    const next = updateTimes(state, { type: 'times_loaded', payload });
    expect(next).toEqual(payload);
  });

  test('slot_booked removes the booked time', () => {
    const state = ['17:00', '18:00', '19:00'];
    const next = updateTimes(state, { type: 'slot_booked', payload: '18:00' });
    expect(next).toEqual(['17:00', '19:00']);
  });

  test('slot_released adds a time once and keeps sorted', () => {
    const state = ['17:00', '19:00'];
    const next = updateTimes(state, { type: 'slot_released', payload: '18:00' });
    expect(next).toEqual(['17:00', '18:00', '19:00']);

    // no duplica
    const next2 = updateTimes(next, { type: 'slot_released', payload: '18:00' });
    expect(next2).toEqual(['17:00', '18:00', '19:00']);
  });
});
