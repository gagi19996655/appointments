import { fireEvent, render, screen } from '@testing-library/svelte';
import Workout from './workout.svelte';

describe('Workout component', () => {
  it('updates an appointment', async () => {
    render(Workout);

    const editButtons = screen.getAllByText('Edit');
    const firstEditButton = editButtons[0];
    fireEvent.click(firstEditButton);

    const titleInput = screen.getByPlaceholderText('Appointment Title');
    const descriptionInput = screen.getByPlaceholderText('Appointment Description');
    const dateInput = screen.getByLabelText('yyyy-mm-dd');
    const timeInput = screen.getByLabelText('hh:mm');

    fireEvent.change(titleInput, { target: { value: 'Updated Test Appointment' } });
    fireEvent.change(descriptionInput, { target: { value: 'This is an updated test appointment.' } });
    fireEvent.change(dateInput, { target: { value: '2023-03-02' } });
    fireEvent.change(timeInput, { target: { value: '13:00' } });

    
  });
})