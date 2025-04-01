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
  username = '';
  password = '';

  authService = inject(AuthService);

  login() {
    this.authService
      .loginAuth({
        username: 'johnd',
        password: 'm38rmF$',
      })
      .subscribe({
        next: (resp) => {
          if (resp) {
            this.authService.login.set(true);
          }
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log('Error handler:', error);
          alert('Error handler:' + error.status);
        },
      });
  }
}
