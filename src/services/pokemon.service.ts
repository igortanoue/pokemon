import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpclient: HttpClient) { }

  buscarPokemon(nameOrId: string ): Observable<any> {
    return this.httpclient.get<any>(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
  }

}
