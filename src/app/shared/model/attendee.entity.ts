export class Attendee {
  id: string;
  firstName: string;
  lastName: string;
  eventId: number;
  ticketIdentifier: string;
  checkedInAt: Date;

  constructor(id: string, firstName: string, lastName: string, eventId: number,
              ticketIdentifier: string, checkedInAt?: any) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.eventId = eventId;
    this.ticketIdentifier = ticketIdentifier;
    this.checkedInAt = checkedInAt || null;
  }
}
