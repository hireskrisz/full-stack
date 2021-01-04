import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {IRoute} from "../ticket/ticket.component";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {apiURL} from "../../environments/environment";
import {AuthService} from "../services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {NewTicketDialogComponent} from "../new-ticket-dialog/new-ticket-dialog.component";

export interface IUser {
  balance: number,
  bucket: string,
  created_at: Date,
  email: string,
  id: number,
  isAdmin: boolean,
  name: string,
  updated_at: Date
}

export interface IVehicle {
  capacity: string,
  created_at: Date,
  id: number,
  license:string,
  type: string,
  updated_at: Date,
}

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  displayedColumnsTickets: string[] = ['id', 'fromto', 'validto', 'func'];
  dataSourceTickets: MatTableDataSource<IRoute>;

  displayedColumnsUsers: string[] = ['id', 'name', 'mail', 'func'];
  dataSourceUsers: MatTableDataSource<IUser>;

  displayedColumnsVehicles: string[] = ['id', 'vehicle', 'license', 'func'];
  dataSourceVehicles: MatTableDataSource<IVehicle>;

  constructor(private http: HttpClient, private auth: AuthService,
              private dialog: MatDialog) {
  }



  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.getUserToken()}`
    })

    this.http.get(apiURL + 'routes').subscribe( result => {
      // @ts-ignore
      this.dataSourceTickets = result;
      // console.log(this.dataSourceTickets);

    });

    this.http.get(apiURL + 'users', {headers: headers}).subscribe( result => {
      // @ts-ignore
      this.dataSourceUsers = result;
      console.log(this.dataSourceUsers);

    })

    this.http.get(apiURL + 'vehicles', {headers: headers}).subscribe( result => {
      // @ts-ignore
      this.dataSourceVehicles = result;
      console.log(this.dataSourceVehicles);

    })
  }

  public deleteUser(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.getUserToken()}`
    })

    this.http.delete(apiURL + 'users/'+ id, {headers: headers}).subscribe( result => {
      console.log(result);
      this.http.get(apiURL + 'users', {headers: headers}).subscribe( result => {
        // @ts-ignore
        this.dataSourceUsers = result;
        console.log(this.dataSourceUsers);

      })
    })
  }

  public deleteVehicle(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.getUserToken()}`
    })

    this.http.delete(apiURL + 'vehicles/'+ id, {headers: headers}).subscribe( result => {
      console.log(result);
      this.http.get(apiURL + 'vehicles', {headers: headers}).subscribe( result => {
        // @ts-ignore
        this.dataSourceVehicles = result;
        // console.log(this.dataSourceVehicles);

      })
    })
  }

  public deleteRoute(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.getUserToken()}`
    })

    this.http.delete(apiURL + 'routes/'+ id, {headers: headers}).subscribe( result => {
      // console.log(result);
      this.http.get(apiURL + 'routes').subscribe( result => {
        // @ts-ignore
        this.dataSourceTickets = result;
        // console.log(this.dataSourceTickets);

      });
    })
  }

  openDialog() {
    this.dialog.open(NewTicketDialogComponent, {
      width: '500px',
      height: 'auto'
    })
  }
}
