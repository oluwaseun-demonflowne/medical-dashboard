interface Person {
  name: string;
  age: number;
  id: string;
  gender: string;
  date: string; // Updated to include both month and day
  time: string;
  ampm: string;
  status: string; // New property for status
}

export const people: Person[] = [
  {
    name: "John Doe",
    age: 25,
    id: "123456",
    gender: "Male",
    date: "April 10",
    time: "9:30",
    ampm: "am",
    status: "confirmed",
  },
  {
    name: "Jane Smith",
    age: 30,
    id: "789012",
    gender: "Female",
    date: "April 15",
    time: "14:45",
    ampm: "pm",
    status: "not available",
  },
  {
    name: "Bob Johnson",
    age: 28,
    id: "345678",
    gender: "Male",
    date: "May 5",
    time: "11:15",
    ampm: "am",
    status: "confirmed",
  },
  {
    name: "Alice Brown",
    age: 22,
    id: "901234",
    gender: "Female",
    date: "June 20",
    time: "16:20",
    ampm: "pm",
    status: "declined",
  },
  {
    name: "Chris White",
    age: 35,
    id: "567890",
    gender: "Male",
    date: "July 3",
    time: "13:00",
    ampm: "pm",
    status: "confirmed",
  },
  {
    name: "Emily Davis",
    age: 27,
    id: "234567",
    gender: "Female",
    date: "August 12",
    time: "8:45",
    ampm: "am",
    status: "not available",
  },
  {
    name: "David Wilson",
    age: 32,
    id: "890123",
    gender: "Male",
    date: "September 8",
    time: "18:30",
    ampm: "pm",
    status: "declined",
  },
];

interface DoctorAppointment {
  name: string;
  reason: string;
  time: string;
}

export const doctorAppointments: DoctorAppointment[] = [
  {
    name: "Dr. Smith",
    reason: "Routine checkup",
    time: "10:00 AM",
  },
  {
    name: "Dr. Johnson",
    reason: "Follow-up after surgery",
    time: "2:30 PM",
  },
  {
    name: "Dr. Davis",
    reason: "Flu symptoms",
    time: "11:15 AM",
  },
  {
    name: "Dr. Wilson",
    reason: "Annual physical exam",
    time: "3:45 PM",
  },
];


interface Appointment {
  name: string;
  randomMessage: string;
  date: string;
}

export const appointments: Appointment[] = [
  {
    name: "Alice Smith",
    randomMessage: "Feeling a bit under the weather",
    date: "5/10/20"
  },
  {
    name: "Bob Johnson",
    randomMessage: "Annual health checkup",
    date: "5/10/20"
  },
  {
    name: "Charlie Brown",
    randomMessage: "Follow-up for recent treatment",
    date: "5/10/20"
  },
  {
    name: "Diana Davis",
    randomMessage: "Just a regular visit",
    date: "5/10/20"
  },
  {
    name: "Ethan Wilson",
    randomMessage: "Routine checkup",
    date: "5/10/20"
  },
  {
    name: "Fiona Miller",
    randomMessage: "Dental checkup",
    date: "5/10/20"
  },
  {
    name: "George Taylor",
    randomMessage: "Eye examination",
    date: "5/10/20"
  },
  {
    name: "Hannah Clark",
    randomMessage: "Health consultation",
    date: "5/10/20"
  }
];


interface Chat {
  chatId: number;
  id: number;
  name: string;
  message: string;
  date: string;
}

export interface DemoChats extends Array<Chat> {}

export const demoChats: DemoChats = [
  {
    chatId: 1,
    id: 1,
    name: "khan",
    message: "You good?",
    date: "Today 7:45 am"
  },
  {
    chatId: 2,
    id: 2,
    name: "rob",
    message: "sure I am good",
    date: "Today 7:45 am"
  },
  {
    chatId: 3,
    id: 1,
    name: "khan",
    message: "How is service btw",
    date: "Today 7:45 am"
  },
  {
    chatId: 4,
    id: 2,
    name: "rob",
    message: "was fine thanks",
    date: "Today 7:45 am"
  }
];


