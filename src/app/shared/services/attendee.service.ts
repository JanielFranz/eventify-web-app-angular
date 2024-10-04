import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Attendee} from '../model/attendee.entity';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, retry} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendeeService extends BaseService<Attendee>{
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndPoint = '/attendees';
  }

  findByTicketIdentifier(ticketIdentifier: string): Observable<Attendee> {
    return this.http.get<Attendee[]>(`${this.resourcePath()}?ticketIdentifier=${ticketIdentifier}`)
      .pipe(
        map(attendees => {
          if(attendees && attendees.length > 0) {
            return attendees[0];
          } else {
            return {} as Attendee;
          }
        }),
        retry(2), catchError(this.handleError)
      )
  }
}
