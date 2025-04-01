import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent {
  private readonly router = inject(Router);

  authService = inject(AuthService);

  login() {
    this.authService.login.set(true);
    this.router.navigate(['/']);
  }
}
