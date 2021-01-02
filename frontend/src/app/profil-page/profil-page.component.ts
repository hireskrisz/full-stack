import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";
import {apiURL} from "../../environments/environment";

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.scss']
})
export class ProfilPageComponent implements OnInit {

  public modifyNameFormGroup: FormGroup
  constructor(public auth: AuthService, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.modifyNameFormGroup = this.formBuilder.group({
      newName: new FormControl('', [Validators.required])
    })
  }

  public modify() {
    console.log(this.modifyNameFormGroup.getRawValue());
    let params = new HttpParams();
    params = params.append('name', this.modifyNameFormGroup.controls.newName.value);
  }

  public deleteAccount() {
    console.log('TODO delete Account');
  }

}
