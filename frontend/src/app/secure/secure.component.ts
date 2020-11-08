import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {

  user;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Authorization': `Barer ${localStorage.getItem('token')}`
    });
    this.http.get('https://tick-it-easy-backend.herokuapp.com/users').subscribe( result => {
      console.log(result);
      this.user = result;
    }, error => {
      console.log('error');
      console.log(error);
    });
  }

}
