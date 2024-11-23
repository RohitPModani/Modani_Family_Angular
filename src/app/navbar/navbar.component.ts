import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showNavbar: boolean = true; // Flag to control the visibility of the navbar

  constructor(
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Check the current route on initialization
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      this.showNavbar = currentRoute !== '/'; // Hide navbar only on landing page
    });
  }

  goBack() {
    this.location.back(); // Use location service to navigate back
  }
}
