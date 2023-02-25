import AppointmentPreview from './AppointmentPreview.svelte';
import { render } from '@testing-library/svelte';

describe('Appointment component', () => {
  it('should render the appointment prop', () => {
    const appointment = {
      title: 'Test Appointment',
     
      date: '2022-02-28',
      time: '10:00 AM',
    
    };
    const { getByText } = render(AppointmentPreview, { props: { appointment } });
    expect(getByText(appointment.title)).toBeInTheDocument();
  
   
    expect(getByText(`${appointment.date} at ${appointment.time}`)).toBeInTheDocument();
   
  });
});
