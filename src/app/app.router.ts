import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

export const appRoutes: Routes = [
  { path: '', component: LandingComponent },  // Landing page
  { path: 'person/:id', component: PersonDetailComponent },  // Person detail page
  { path: '**', redirectTo: '' }  // Fallback to landing page for unknown routes
];
