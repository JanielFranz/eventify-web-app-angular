import {Component, Input} from '@angular/core';
import {EventE} from '../../../shared/model/event.entity';
import {Attendee} from '../../../shared/model/attendee.entity';
import {Rating} from '../../../shared/model/rating.entity';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-event-summary-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    MatCardTitle
  ],
  templateUrl: './event-summary-item.component.html',
  styleUrl: './event-summary-item.component.css'
})
export class EventSummaryItemComponent {
  @Input() event!: EventE;
  @Input() attendees!: Array<Attendee>;
  @Input() ratings!: Array<Rating>

  protected noRatingMessage: string =''
  //#region Utility Methods

  isZero = (): boolean => this.calculateAverageRating() === 0

  calculateCheckedInAttendees(): number {
    const eventId: number = Number(this.event.id)
    return this.attendees.filter(attendee => attendee.eventId === eventId && attendee.checkedInAt !== null).length
  }

  calculateAverageRating(): number {
    const eventId: number = Number(this.event.id)
    const ratingPoints = this.ratings
      .filter(rating => rating.eventId === eventId)
      .map(rating => rating.rating)
    if(ratingPoints.length === 0) {
      return 0;
    }
    const totalRatingPoints = ratingPoints.reduce((a, b) => a + b, 0)
    return totalRatingPoints / ratingPoints.length
  }


  //#endregion


}
