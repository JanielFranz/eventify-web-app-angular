import { Component } from '@angular/core';
import {RatingFormComponent} from '../../components/rating-form/rating-form.component';
import {AttendeeService} from '../../../shared/services/attendee.service';
import {Attendee} from '../../../shared/model/attendee.entity';
import {RatingService} from '../../../shared/services/rating.service';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [
    RatingFormComponent
  ],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  protected ticketIdentifier = '';
  protected rating = 0;

  protected attendee!: Attendee

  constructor(private attendeeService: AttendeeService,
              private ratingService: RatingService) {}

  //utility methods

  validateTicketIdentifier(ticketIdentifier: string) : boolean {
    this.getAttendeeByTicketIdentifier(ticketIdentifier)
    return !!this.attendee.id;
  }

  //#region Event Handlers
  onRateSent(data: { ticketIdentifier: string, rating: number }) {
    this.ticketIdentifier = data.ticketIdentifier;
    this.rating = data.rating;
    console.log(this.ticketIdentifier, this.rating);
    if(this.validateTicketIdentifier(this.ticketIdentifier)) {

    }
  }

  //#endregion

  //#region Request Methods
  getAttendeeByTicketIdentifier(ticketIdentifier: string) {
    this.attendeeService.findByTicketIdentifier(ticketIdentifier).subscribe((response) => {
      this.attendee = response;
    })
  }

  addNewRating() {
    this.ratingService.create({})
  }

  //#endregion

}
