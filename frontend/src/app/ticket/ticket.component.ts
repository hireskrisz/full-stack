import {Component, Input, OnInit} from '@angular/core';
import {apiURL} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

export interface IRoute {
  activePassengers: number,
  created_at: Date,
  endTime: Date,
  from: string,
  id: number,
  startTime: Date,
  to: string,
  updated_at: Date,
  vehicleID: number
}

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})

export class TicketComponent implements OnInit {

  public routesData: IRoute[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(apiURL + 'routes').subscribe( result => {
      // @ts-ignore
      this.routesData = result;
    });
  }

}
