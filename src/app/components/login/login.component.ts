import { Component } from '@angular/core';
import { User } from '../../user';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  LocalStorage: string | null = localStorage.getItem('authToken')
  isBrowser!: boolean;
  

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.logado()
    this.isBrowser = typeof window !== 'undefined';
  }

  onLogin() {
    const { username, password } = this.loginForm.value;
    
    this.authService.login(username, password).subscribe({
      next: (response) => {
        this.authService.saveToken(response.id);
        this.router.navigate(['/']);
      },
      error: () => {
        this.errorMessage = 'Usuário ou senha inválidos!';
      },
    });
  }
  logado() {
      if (this.LocalStorage) {
        this.router.navigate(['/']);
      }
  }
}
