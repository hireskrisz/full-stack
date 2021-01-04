import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor() {}

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    return token !== null;
  }

  public getUserToken(): string {
    return sessionStorage.getItem('token');
  }

  public getAdminAccess(): string {
    return sessionStorage.getItem('admin');
  }

  public getBalance(): string {
    return sessionStorage.getItem('balance');
  }

  public getUserId(): string {
    return sessionStorage.getItem('userid');
  }

  public getUserUseName(): string {
    return sessionStorage.getItem('username');
  }

  public getUser(): string {
    // let myObj = { name: 'Skip', breed: 'Labrador' };
    // localStorage.setItem(key, JSON.stringify(myObj));
    return JSON.parse(sessionStorage.getItem('user'));
  }

  public getUserMail(): string {
    return sessionStorage.getItem('usermail');
  }
}
