export class Rating {
  id: string;
  attendeeId: number;
  eventId: number;
  rating: number;
  ratedAt: string;

  constructor(id: string, attendeeId: number, eventId: number, rating: number, ratedAt: string) {
    this.id = id;
    this.attendeeId = attendeeId;
    this.eventId = eventId;
    this.rating = rating;
    this.ratedAt = ratedAt;
  }
}
