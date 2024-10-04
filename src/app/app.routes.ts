import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';
import {RatingComponent} from './rating/pages/rating/rating.component';

export const routes: Routes = [
  { path: 'home'                  , component: HomeComponent },
  { path: 'engagement/ratings/new', component: RatingComponent },
  { path: ''                      , redirectTo: 'home', pathMatch: 'full' },

];
