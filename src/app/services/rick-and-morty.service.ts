import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {
    console.log('Service RickAndMorty initialisé');
  }

  getAllCharacters(): Observable<any> {
    console.log('Requête GET pour tous les personnages');
    return this.http.get(this.baseUrl);
  }

  getCharacterById(id: number): Observable<any> {
    console.log('Requête GET pour le personnage ID:', id);
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}