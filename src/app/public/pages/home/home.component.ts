import {Component, OnInit} from '@angular/core';
import {EventE} from '../../../shared/model/event.entity';
import {Attendee} from '../../../shared/model/attendee.entity';
import {Rating} from '../../../shared/model/rating.entity';
import {AttendeeService} from '../../../shared/services/attendee.service';
import {EventService} from '../../../shared/services/event.service';
import {RatingService} from '../../../shared/services/rating.service';
import {EventSummaryListComponent} from '../../components/event-summary-list/event-summary-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EventSummaryListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  protected events!: Array<EventE>;
  protected attendees!: Array<Attendee>;
  protected ratings!: Array<Rating>;

  constructor(private attendeeService: AttendeeService,
              private eventService: EventService,
              private ratingService: RatingService) {}
  //## region Request Methods
    private getAllAttendees() {
      this.attendeeService.getAll().subscribe((response: Array<Attendee>) => {
        this.attendees = response;
      })
    }

    private getAllEvents() {
      this.eventService.getAll().subscribe((response: Array<EventE>) => {
        this.events = response;
      })
    }

    private getAllRatings() {
      this.ratingService.getAll().subscribe((response: Array<Rating>) => {
        this.ratings = response;
      })
    }

  //#endregion
  ngOnInit(): void {
    this.getAllAttendees();
    this.getAllRatings();
    this.getAllEvents();

  }
}
