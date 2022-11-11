import { Component, OnInit } from '@angular/core';
import {
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  currentRoute: string;
  constructor(private router: Router) {
    this.currentRoute = router.url;
  }
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('Route change detected');
      }

      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }

      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }
}
