import {Component, Input} from '@angular/core';
import {EventE} from '../../../shared/model/event.entity';
import {Attendee} from '../../../shared/model/attendee.entity';
import {Rating} from '../../../shared/model/rating.entity';
import {NgForOf} from '@angular/common';
import {EventSummaryItemComponent} from '../event-summary-item/event-summary-item.component';

@Component({
  selector: 'app-event-summary-list',
  standalone: true,
  imports: [
    NgForOf,
    EventSummaryItemComponent
  ],
  templateUrl: './event-summary-list.component.html',
  styleUrl: './event-summary-list.component.css'
})
export class EventSummaryListComponent {
  @Input() events!: Array<EventE>;
  @Input() attendees!: Array<Attendee>;
  @Input() ratings!: Array<Rating>
}
