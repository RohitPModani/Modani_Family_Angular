import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FamilyTreeService } from '../services/family-tree.service';
import { CommonModule } from '@angular/common';
import { Person } from '../models/person.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-person-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit, OnDestroy {
  person: any;
  showChildren: boolean = false;
  private routeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private familyService: FamilyTreeService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe((paramMap) => {
      const personId = paramMap.get('id') as string;
      this.person = this.familyService.getPersonById(personId);
    });
  }

  loadChildren(): void {
    this.showChildren = !this.showChildren;
  }

  navigateToChild(childId: string): void {
    const child = this.person?.children?.find((c: Person) => c.id === childId);

    // Ensure the child is only navigable if it has children
    if (child && child.children && child.children.length > 0) {
      this.router.navigate(['/person', childId]).catch((err) => {
        console.error('Navigation error:', err);
      });
    } else {
      console.warn('Child has no further children and is not navigable.');
    }
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe(); // Clean up subscriptions
    }
  }
}
