import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

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

  constructor (private authService: AuthService, private router: Router) {

  }

  sair() {
    this.authService.logout()
    this.router.navigate(['/login']);
  }
}
