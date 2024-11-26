import { Component } from '@angular/core';
import { Animal } from '../../Animal';

import { ListService } from '../../services/list.service'

@Component({
  selector: 'app-list-render',
  standalone: false,

  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = []

  animalDetails = ''

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }
  constructor(private listService: ListService) {
    this.getAnimals()
  }

  removeAnimal(animal: Animal) {
    console.log('removendo animal');
    this.animals = this.listService.remove(this.animals, animal)
  }

  getAnimals(): void {
    this.listService.getAll().subscribe({
      next: (animals) => {
        this.animals = animals

      }
    })
  }
}
