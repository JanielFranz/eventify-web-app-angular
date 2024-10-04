import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Rating} from '../model/rating.entity';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingService extends BaseService<Rating>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndPoint = '/ratings';
  }
}
