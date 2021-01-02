import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {apiURL} from "../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  public logout() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.getUserToken()}`
    })
    this.http.post(apiURL + 'logout', null, {headers: headers}).subscribe( result => {
      console.log(result);
      this.router.navigate(['/']);
      sessionStorage.clear();
    });

  }

}
