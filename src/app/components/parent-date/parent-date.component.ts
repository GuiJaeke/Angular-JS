import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-date',
  standalone: false,
  
  templateUrl: './parent-date.component.html',
  styleUrl: './parent-date.component.css'
})
export class ParentDateComponent {
  @Input() name: string = '';
  @Input() array!: {
    top: string,
    demais: string
  };
}
