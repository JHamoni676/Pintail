import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteState } from '../../states/site.state';

@Component({
  selector: 'pin-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private siteState: SiteState) {}

  ngOnInit() {
    this.siteState.getSites();
  }
}
