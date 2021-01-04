import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {apiURL} from "../../environments/environment";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-new-ticket-dialog',
  templateUrl: './new-ticket-dialog.component.html',
  styleUrls: ['./new-ticket-dialog.component.scss']
})
export class NewTicketDialogComponent implements OnInit {

  public newRouteFormGroup: FormGroup;
  constructor(private http: HttpClient, private formBuilder: FormBuilder,
              private dialog: MatDialog, private auth: AuthService) { }

  ngOnInit(): void {
    this.newRouteFormGroup = this.formBuilder.group({
      activePassengers: new FormControl('', [Validators.required]),
      endTime: new FormControl('', [Validators.required]),
      from : new FormControl('', [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
      to : new FormControl('', [Validators.required]),
      vehicleID: new FormControl('', [Validators.required])
    })
  }

  closeDialog() {
    this.dialog.ngOnDestroy();
  }

  formSubmitCreate() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.getUserToken()}`
    })

    let params = new HttpParams();
    params = params.append('from', this.newRouteFormGroup.controls.from.value);
    params = params.append('to', this.newRouteFormGroup.controls.to.value);
    params = params.append('endTime', this.newRouteFormGroup.controls.endTime.value);
    params = params.append('startTime', this.newRouteFormGroup.controls.startTime.value);
    params = params.append('vehicleID', this.newRouteFormGroup.controls.vehicleID.value);
    params = params.append('activePassengers', this.newRouteFormGroup.controls.activePassengers.value);

    this.http.post(apiURL + 'routes', null,{headers: headers, params: params}).subscribe( result => {
      console.log(result);
    })
  }
}
