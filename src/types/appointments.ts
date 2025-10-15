export type AppointmentPeriodDay = "morning" | "afternoon" | "evening";

export type Appointment = {
  id: string;
  time: string;
  petName: string;
  tutorNamer: string;
  phone: string;
  description: string;
  scheduleAt: Date;
  period: AppointmentPeriodDay;
};

export type AppointmentPeriod = {
  title: string;
  type: AppointmentPeriodDay;
  timeRange: string;
  appointments: Appointment[];
};
