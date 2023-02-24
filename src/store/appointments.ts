import { writable } from 'svelte/store';

export type Appointment = {
  id: number;
  title: string;
  body: string;
  date: string;
  time: string;
};

const initialAppointments: Appointment[] = [
  {
    id: 1,
    title: 'Appointment 1',
    body: 'This is the first appointment',
    date: '2023-03-01',
    time: '10:00 AM',
  },
  {
    id: 2,
    title: 'Appointment 2',
    body: 'This is the second appointment',
    date: '2023-03-02',
    time: '2:00 PM',
  },
  {
    id: 3,
    title: 'Appointment 3',
    body: 'This is the third appointment',
    date: '2023-03-03',
    time: '9:00 AM',
  },
  {
    id: 4,
    title: 'Appointment 4',
    body: 'This is the fourth appointment',
    date: '2023-03-04',
    time: '3:30 PM',
  },
  {
    id: 5,
    title: 'Appointment 5',
    body: 'This is the fifth appointment',
    date: '2023-03-05',
    time: '11:00 AM',
  },
];
export const appointments = writable(initialAppointments);


  


