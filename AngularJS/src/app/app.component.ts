import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = "dedex";
  array = {
    top: 'aqui é top',
    demais: 'isso é demais'
  }
  title = 'AngularJS';
}
