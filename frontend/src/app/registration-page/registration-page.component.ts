import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {apiURL} from "../../environments/environment";
import {ILogin} from "../login/login.component";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class RegistrationPageComponent implements OnInit {
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public regLoginUserData: ILogin;

  constructor(private _formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
    this.secondFormGroup = this._formBuilder.group({
      password: new FormControl('', [Validators.required]),
      passwordAgain: new FormControl('', [Validators.required]),
    });
  }

  public regSubmit() {
    console.log(this.firstFormGroup.getRawValue());
    console.log(this.secondFormGroup.getRawValue());

    let params = new HttpParams();
    params = params.append('email', this.firstFormGroup.controls.email.value);
    params = params.append('name', this.firstFormGroup.controls.name.value);
    params = params.append('password', this.secondFormGroup.controls.password.value);
    params = params.append('password_confirmation', this.secondFormGroup.controls.passwordAgain.value);

    this.http.post(apiURL + 'register', null, {params: params}).subscribe( result => {
      // @ts-ignore
      this.regLoginUserData = result;
      sessionStorage.setItem('token', this.regLoginUserData.token);
      sessionStorage.setItem('username', this.regLoginUserData.user.name);
      sessionStorage.setItem('usermail', this.regLoginUserData.user.email);
      this.router.navigate(['tickets']);
      sessionStorage.setItem('admin', String(this.regLoginUserData.user.isAdmin));
    }, error => {
      console.log(error);
    })
  }
}
