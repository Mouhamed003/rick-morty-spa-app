import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <nav>
      <a routerLink="/characters" routerLinkActive="active-link">Liste</a>
      <a routerLink="/details" routerLinkActive="active-link">Détails</a>
    </nav>

    <hr>

    <router-outlet></router-outlet>
  `,
  styles: [`
    .nav-link {
      margin: 0 10px;
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      color: #333;
    }
    .nav-link:hover {
      background-color: #f0f0f0;
    }
    .nav-link.active-link {
      background-color: #e0e0e0;
    }
  `]
})
export class AppComponent {}