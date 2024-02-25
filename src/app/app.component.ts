import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'simples';
  texto: string = '';
  nameOrId: string = '';
  pokemonImage: string = '';
  erro: string = '';

  constructor(private pokemonService: PokemonService) { }


  alterarTitulo(): void {
    if (this.texto == '') {
      return;
    }
    this.title = this.texto
  }

  private validarLetraMaiuscula(): void {
    if (this.nameOrId != '' && this.nameOrId.charAt(0) == this.nameOrId.charAt(0).toUpperCase()) {
      this.erro = 'Todas letras tem que ser minuscula';
    }
  }

  buscarPokemon(nameOrId: string): void {
    if (this.nameOrId == '') {
      return;
    }

    this.validarLetraMaiuscula();

    this.pokemonService.buscarPokemon(nameOrId).subscribe({
      next: responsePokemon => {
        console.log(responsePokemon);
        this.pokemonImage = responsePokemon.sprites.front_default;

      },
      error: error => {
        console.log(error);
      }
    });
  }
}
