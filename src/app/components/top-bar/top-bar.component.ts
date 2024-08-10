import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  currentUrl: string | undefined;
  showButtons: boolean = true;

  constructor(private router: Router, public route: RouterService) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl = event.url;
      this.showButtons = this.currentUrl !== '/start';
    });

    // Initialize URL and button visibility after subscribing to router events
    setTimeout(() => {
      this.currentUrl = this.router.url;
      this.showButtons = this.currentUrl !== '/start';
    });
  }
}
