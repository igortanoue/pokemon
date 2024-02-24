import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

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
   

   alterarTitulo(): void {
    if (this.texto == '') {
      return;
    }
    this.title = this.texto

   }
}
