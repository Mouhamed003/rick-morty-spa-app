import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Liste des personnages</h2>

    <div *ngIf="loading">Chargement...</div>
    <div *ngIf="error" style="color: red;">{{ error }}</div>

    <ul *ngIf="!loading && !error">
      <li *ngFor="let character of characters">
        ID: {{ character.id }} - Nom: {{ character.name }}
      </li>
    </ul>
  `,
  styles: [`
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
  `]
})
export class CharactersListComponent implements OnInit {
  characters: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private api: RickAndMortyService) {}

  ngOnInit(): void {
    console.log('Chargement des personnages...');
    this.api.getAllCharacters().subscribe({
      next: (data) => {
        console.log('Données reçues:', data);
        this.characters = data.results;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur:', err);
        this.error = 'Erreur lors du chargement des personnages.';
        this.loading = false;
      }
    });
  }
}