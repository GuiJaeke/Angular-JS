import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { User } from '../../user';
import { ListService } from '../../services/list.service'
import { Resolve } from '@angular/router';

@Component({
  selector: 'app-list-render',
  standalone: false,

  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = []

  users: User[] = []

  animalDetails = ''
  name: string = ''



  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }
  constructor(private listService: ListService) {
    this.getAnimals()
    this.getUsers()
  }
  filter(name: String): void {
    this.users = this.users.filter((a) => a.name.includes(`${name}`))
  }
  removeUser(user: User) {
    const id = user.id
    this.users = this.users.filter((a) => user.name !== a.name)
    this.listService.remove(id).subscribe()
  }
  async getUsers() { this.listService.getAllUsers().subscribe({next: async (user) => { 
   this.users = user
  }})}

  getAnimals(): void {
    this.listService.getAll().subscribe({
      next: (animals) => {
        this.animals = animals

      }
    })
  }
}
