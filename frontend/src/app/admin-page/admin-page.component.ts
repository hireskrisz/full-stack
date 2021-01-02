import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {IRoute} from "../ticket/ticket.component";
import {HttpClient} from "@angular/common/http";
import {apiURL} from "../../environments/environment";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  displayedColumnsTickets: string[] = ['id', 'fromto', 'validto', 'func'];
  dataSourceTickets: MatTableDataSource<IRoute>;

  constructor(private http: HttpClient) {
  }



  ngOnInit(): void {
    this.http.get(apiURL + 'routes').subscribe( result => {
      // @ts-ignore
      this.dataSourceTickets = result;
      // console.log(this.dataSourceTickets);

    })
  }
}
