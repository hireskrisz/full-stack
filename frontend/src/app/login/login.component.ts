import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {apiURL} from "../../environments/environment";
import {Router} from "@angular/router";

export interface ILogin {
  token: string,
  user: {
    balance: number,
    bucket: string,
    created_at: Date,
    email: string,
    id: number,
    isAdmin: boolean,
    name: string,
    updated_at: Date
  }

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup;
  public loginUserData: ILogin;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group( {
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  public submitForm() {
    console.log(this.loginFormGroup.getRawValue());
    let params = new HttpParams();
    params = params.append('email', this.loginFormGroup.controls.email.value);
    params = params.append('password', this.loginFormGroup.controls.password.value);
    params = params.append('password_confirmation', this.loginFormGroup.controls.password.value);

    this.http.post(apiURL + 'login',null, {params: params}).subscribe( result => {
      // @ts-ignore
      this.loginUserData = result;
      sessionStorage.setItem('token', this.loginUserData.token);
      sessionStorage.setItem('username', this.loginUserData.user.name);
      sessionStorage.setItem('usermail', this.loginUserData.user.email);
      sessionStorage.setItem('userid', String(this.loginUserData.user.id));
      sessionStorage.setItem('balance', String(this.loginUserData.user.balance));
      this.router.navigate(['tickets']);
      sessionStorage.setItem('admin', String(this.loginUserData.user.isAdmin));
      console.log('login', result);
    }, error => {
      console.log(error);
    })
  }

  public login() {
  }

}
