import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  private loading: boolean;
  private errors: boolean;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router,
              private authService: AuthService ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: ''
    });
  }

  logout(): void {
    this.loading = true;
    this.authService.logout()
      .subscribe(() => {
        this.loading = false;
        localStorage.removeItem('access_token');
        this.router.navigate(['/login']);
      });
  }

  login(): void {
    this.loading = true;
    this.errors = false;
    this.authService.login(this.form.controls.email.value, this.form.controls.password.value)
      .subscribe((res: any) => {
        // Store the access token in the localstorage
        localStorage.setItem('access_token', res.access_token);
        this.loading = false;
        // Navigate to home page
        this.router.navigate(['/']);
      }, (err: any) => {
        // This error can be internal or invalid credentials
        // You need to customize this based on the error.status code
        this.loading = false;
        this.errors = true;
      });
  }

  submit(): void {
    console.log(this.form.getRawValue());
    this.login();
  }
}
