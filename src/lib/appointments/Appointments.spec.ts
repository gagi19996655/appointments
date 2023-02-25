import Appointments from './Appointments.svelte';
import { render } from '@testing-library/svelte';
import { appointments } from '../../store/appointments';

describe('Appointment component', () => {
  it('renders all appointments', () => {
    const mockAppointments = [
      {
        id: 1,
        title: 'Doctor appointment',
        body: 'This is the first appointment for the month of March 2023 need to be done by 10:00 AM',
        date: '2022-03-01',
        time: '14:30',
      },
      {
        id: 2,
        title: 'Dentist appointment',
        body: 'This is the first appointment for the month of March 2023 need to be done by 10:00 AM',
        date: '2022-03-03',
        time: '10:00',
       
      },
      {
        id: 3,
        title: 'Therapist appointment',
        body: 'This is the first appointment for the month of March 2023 need to be done by 10:00 AM',
        date: '2022-03-05',
        time: '16:15',
    
      },
    ];

    appointments.set(mockAppointments);

    const { getAllByTestId } = render(Appointments);

    expect(getAllByTestId('appointment-preview').length).toEqual(mockAppointments.length);
  });
});
