import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getCharacterById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}