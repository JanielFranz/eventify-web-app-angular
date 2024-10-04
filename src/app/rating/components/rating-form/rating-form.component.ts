import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-rating-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './rating-form.component.html',
  styleUrl: './rating-form.component.css'
})
export class RatingFormComponent  {
  rateForm = new FormGroup({
    ticketIdentifier: new FormControl(''),
    rating: new FormControl(''),
  })

  @Output() submitRate = new EventEmitter<{ ticketIdentifier: string, rating: number }>();

  onRateSent(ticketIdentifier: string, rating: number) {
    this.submitRate.emit({ ticketIdentifier, rating })
  }

  onSubmit() {
    const { ticketIdentifier, rating } = this.rateForm.value;

    const ticketId: string = ticketIdentifier ? ticketIdentifier.toString() : '';
    const rate: number = rating ? Number(rating) : 0;

    this.onRateSent(ticketId, rate);
  }


}
