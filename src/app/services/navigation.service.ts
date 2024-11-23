import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private previousPersonId: string | undefined;

  // Store the previous person ID when a person is navigated to
  setPreviousPersonId(id: string): void {
    console.log('Setting previous person ID:', id);
    this.previousPersonId = id;
  }

  // Get the previous person ID
  getPreviousPersonId(): string | undefined {
    console.log('Getting previous person ID:', this.previousPersonId);
    return this.previousPersonId;
  }

  // Reset the previous person ID if needed (e.g., when navigating to landing page)
  resetPreviousPersonId(): void {
    console.log('Resetting previous person ID');
    this.previousPersonId = undefined;
  }
}
