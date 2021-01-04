import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {apiURL} from "../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.scss']
})
export class ProfilPageComponent implements OnInit {

  public modifyNameFormGroup: FormGroup
  public modifyPassFormGroup: FormGroup
  public modifyBalanceFormGroup: FormGroup
  constructor(public auth: AuthService, private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.modifyNameFormGroup = this.formBuilder.group({
      newName: new FormControl('', [Validators.required])
    })
    this.modifyPassFormGroup = this.formBuilder.group({
      newPass: new FormControl('', [Validators.required])
    })
    this.modifyBalanceFormGroup = this.formBuilder.group({
      newBalance: new FormControl('', [Validators.required])
    })
  }

  public modifyName() {
    console.log(this.modifyNameFormGroup.getRawValue());

    let params = new HttpParams();
    params = params.append('name', this.modifyNameFormGroup.controls.newName.value);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.getUserToken()}`
    });

    this.http.put(`${apiURL}users/${this.auth.getUserId()}`, null, {headers: headers, params: params}).subscribe( result => {
      console.log(result);
      this.http.get(`${apiURL}users/${this.auth.getUserId()}`, {headers: headers}).subscribe( result => {
        console.log(result);
        // @ts-ignore
        sessionStorage.setItem('username', result.name);
      });
    });
  }

  public modifyPass() {
    console.log(this.modifyPassFormGroup.getRawValue());
    let params = new HttpParams();
    params = params.append('password', this.modifyPassFormGroup.controls.newPass.value);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.getUserToken()}`
    });

    this.http.put(`${apiURL}users/${this.auth.getUserId()}`, null, {headers: headers, params: params}).subscribe( result => {
      console.log(result);
      this.http.post(apiURL + 'logout', null, {headers: headers}).subscribe( result => {
        console.log(result);
        this.router.navigate(['/']);
        sessionStorage.clear();
      });
    });
  }

  public modifyBalance() {
    console.log(this.modifyBalanceFormGroup.getRawValue());

    let params = new HttpParams();
    params = params.append('balance', String((this.modifyBalanceFormGroup.controls.newBalance.value as number + Number(sessionStorage.getItem('balance')))))

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.getUserToken()}`
    });

    this.http.put(`${apiURL}users/${this.auth.getUserId()}`, null, {headers: headers, params: params}).subscribe( result => {
      console.log(result);
      this.http.get(`${apiURL}users/${this.auth.getUserId()}`, {headers: headers}).subscribe( result => {
        console.log(result);
        // @ts-ignore
        sessionStorage.setItem('balance', result.balance);
      });
    });
  }

}
