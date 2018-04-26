import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Search} from '../model/search.model';
import { HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { SearchService } from '../search.service';
import { ReceiveTripDuration } from '../receiveTripDuration.service';
import { NgModel} from '@angular/forms';
import { NgForm} from '@angular/forms';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']


})

@Injectable()
export class HomeComponent implements OnInit {


  minDate: Date;
  fromDate: Date;
  toDate: Date;
  maxDate: Date;
   cities: Object;
  search: Search;
   rooms: Object;
    guest: number;
   constructor(private http: HttpClient, private searchService: SearchService, private detailsInRoomPrice: ReceiveTripDuration ) {
     this.minDate = new Date();
     this.maxDate = new Date();
     this.minDate.setDate(this.minDate.getDate());
     this.maxDate.setDate(this.maxDate.getDate() + 10000);
    this.search = new Search();
  }

  tripDuration: Date[];


  private citiesURL = 'http://localhost:4200/city';
  private searchURL = 'http://localhost:4200/search';

  ngOnInit() {
    this.getCities().subscribe(data => {
      this.cities = data;

    });
  }

  getCities() {
    return this.http.get(this.citiesURL);
  }


  searchValue() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    /*const body = JSON.stringify(this.search, {headers: headers});*/
    const body = JSON.stringify(this.search);
     this.http.post(
      this.searchURL, body, httpOptions).subscribe(
      data => {this.rooms = data; console.log(this.rooms); },
      err => { console.log(err); }

    );
  }

  accessDate() {
    this.fromDate = this.tripDuration[0];
    console.log(this.fromDate);
    this.toDate = this.tripDuration[1];
    console.log(this.toDate);
    const diffc = this.toDate.getTime() - this.fromDate.getTime();

    let diffInDays: number;
    diffInDays = Math.round(Math.abs(diffc / (1000 * 60 * 60 * 24)));


    this.detailsInRoomPrice.collectTripDuration(diffInDays);

  }


}


