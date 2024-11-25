import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  standalone: false,
  
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css'
})
export class EmitterComponent {
  mynumber: number = 0
  onChangeNumber(){
    this.mynumber = Math.floor(Math.random() * 100)
  }
}
