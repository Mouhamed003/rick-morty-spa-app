import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Liste des personnages</h2>

      <div *ngIf="loading">Chargement...</div>
      <div *ngIf="error" class="error">{{ error }}</div>

      <ul *ngIf="!loading && !error">
        <li *ngFor="let character of characters">
          ID: {{ character.id }} - Nom: {{ character.name }}
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .container {
      margin: 20px;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      padding: 10px;
      border-bottom: 1px solid #ddd;
    }
    li:hover {
      background-color: #f0f0f0;
    }
    .error {
      color: red;
      margin: 10px 0;
    }
  `]
})
export class CharactersListComponent implements OnInit {
  characters: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private api: RickAndMortyService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  private loadCharacters() {
    this.api.getAllCharacters().subscribe({
      next: (data) => {
        this.characters = data.results;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des personnages.';
        this.loading = false;
      }
    });
  }
}