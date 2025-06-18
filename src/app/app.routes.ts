import { Routes } from '@angular/router';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

export const routes: Routes = [
  { path: 'characters', component: CharactersListComponent },
  { path: 'details', component: CharacterDetailsComponent },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: '**', redirectTo: '/characters' }
];