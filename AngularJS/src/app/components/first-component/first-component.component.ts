import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: false,
  
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = 'jaeke';
  age: number = 22
  lista = [1, 2, 3, 4]
  array = {
    nome: 'biribim',
    local: 'biribal'
  }
  
}
