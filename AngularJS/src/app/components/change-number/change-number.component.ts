import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  standalone: false,
  
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  handleClick() {
    this.changeNumber.emit();
  }
}
