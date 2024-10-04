import { Injectable } from '@angular/core';
import {EventE} from '../model/event.entity';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseService<EventE>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndPoint='/events';
  }
}
