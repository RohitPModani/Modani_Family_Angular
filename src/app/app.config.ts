import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {appRoutes} from './app.router';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]  // Provide router here
};
