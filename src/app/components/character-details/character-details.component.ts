import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h2>Recherche de personnage</h2>

      <div class="search-form">
        <label for="idInput">ID :</label>
        <input id="idInput" type="number" [(ngModel)]="id" min="1">
        <button (click)="fetchCharacter()">Rechercher</button>
      </div>

      <div *ngIf="loading">Chargement...</div>
      <div *ngIf="error" class="error">{{ error }}</div>

      <div *ngIf="character" class="character-details">
        <h3>{{ character.name }}</h3>
        <img [src]="character.image" alt="{{ character.name }}">
        <p><strong>Status:</strong> {{ character.status }}</p>
        <p><strong>Espèce:</strong> {{ character.species }}</p>
        <p><strong>Genre:</strong> {{ character.gender }}</p>
        <p><strong>Origine:</strong> {{ character.origin?.name }}</p>
        <p><strong>Emplacement:</strong> {{ character.location?.name }}</p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin: 20px;
    }
    .search-form {
      margin-bottom: 20px;
    }
    .search-form input {
      width: 100px;
      margin: 0 10px;
    }
    .character-image {
      max-width: 200px;
      border-radius: 8px;
      margin: 10px 0;
    }
    .character-details {
      margin: 20px;
    }
    .character-details h3 {
      margin-bottom: 10px;
    }
    .character-details p {
      margin: 5px 0;
    }
    .error {
      color: red;
      margin: 10px 0;
    }
  `]
})
export class CharacterDetailsComponent {
  id: number | null = null;
  character: any = null;
  error: string | null = null;
  loading = false;

  constructor(private api: RickAndMortyService) { }

  fetchCharacter() {
    this.error = null;
    this.character = null;

    if (!this.id || this.id <= 0) {
      this.error = 'Veuillez saisir un ID positif.';
      return;
      }

    this.loading = true;
    console.log('Recherche du personnage ID:', this.id);
    this.api.getCharacterById(this.id).subscribe({
      next: (data) => {
        console.log('Personnage trouvé:', data);
        this.character = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur:', err);
        this.error = `Personnage avec ID ${this.id} introuvable.`;
        this.loading = false;
      }
    });
  }
}