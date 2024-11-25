import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: false,
  
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  size = 60;
  font = 'arial';

  classes = ['green-title', 'small-title']

}
