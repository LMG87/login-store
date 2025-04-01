import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

const STORE_KEY = 'login';
const loadFromLocalStorage = () => {
  const loginFromLocalStorage = localStorage.getItem(STORE_KEY) ?? false;
  const login = JSON.parse(loginFromLocalStorage.toString());
  return login;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  login = signal<boolean>(loadFromLocalStorage());
  constructor() {}

  saveLoginToLocalStorage = effect(() => {
    const login = JSON.stringify(this.login());
    localStorage.setItem(STORE_KEY, login);
  });

  getAuthToken(): Observable<boolean> {
    return of(this.login());
  }

  logout() {
    localStorage.removeItem(STORE_KEY);
    this.login.set(false);
    window.location.reload();
  }

  loginAuth(data: any) {
    return this.http.post('https://fakestoreapi.com/auth/login', data);
  }
}
