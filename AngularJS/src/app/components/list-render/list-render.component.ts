import { Component } from '@angular/core';
import { Animal } from '../../Animal';
@Component({
  selector: 'app-list-render',
  standalone: false,
  
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = [ 
    {name: 'mel', type: 'dog', age: 5},
    {name: 'lilica', type: 'dog', age: 9}, 
    {name: 'kira', type: 'dog', age: 2}
  ]

  animalDetails = ''

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }
}
