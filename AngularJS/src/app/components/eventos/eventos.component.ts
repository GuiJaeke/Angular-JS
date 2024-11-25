import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: false,
  
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  show: boolean = true;
  num: number = 50;

  soma50(): void {
    this.num = this.num + 50
  }

  showMessage(): void {
    this.show = !this.show;
  }
}
