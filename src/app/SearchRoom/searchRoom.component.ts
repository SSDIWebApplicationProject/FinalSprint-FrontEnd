import {Component, Injectable, OnInit, ViewChild, ElementRef, Renderer} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SearchService } from '../search.service';
import {HttpHeaders} from '@angular/common/http';
import {HomeComponent} from '../Home/home.component';
import {Search} from '../model/search.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-search',
  templateUrl: './searchRoom.component.html',
  styleUrls: ['./searchRoom.component.css']
})
@Injectable()
export class SearchRoomComponent implements OnInit {
  rooms: Object;
  roomDetails: Object;
  constructor(private http: HttpClient, private searchService: SearchService) {

  }

  private headers = new Headers({'Content-Type': 'application/json'});
  private searchURL = 'http://localhost:4200/rooms';

  ngOnInit() {
    this.SerachRoom();


  }
  SerachRoom() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    /*const body = JSON.stringify(this.search, {headers: headers});*/

    this.http.post(
      this.searchURL, httpOptions).subscribe(
      data => {this.rooms = data; console.log(this.rooms); },
      err => { console.log(err); }

    );
  }

  getRoomDetails(roomDetails) {
    let w = roomDetails.roomName;
    let x = roomDetails.distance;
    let y = roomDetails.noBedroom;
    let z = roomDetails.noBathroom;
    let imageURL = roomDetails.roomUrl;
    let costPerDay = roomDetails.costPerDay;

    console.log("Hotel Name: " + w);
    console.log("Room Distance: " + x);
    console.log("No. of bedrooms: " + y);
    console.log("No. of bathrooms: " + z);
    console.log("Cost: " + costPerDay);

    this.searchService.collectRoomName(w);
    this.searchService.collectDistanceFromAirport(x);
    this.searchService.collectNoOfBedrooms(y);
    this.searchService.collectNoOfBathrooms(z);
    this.searchService.collectRoomImage(imageURL);
    this.searchService.collectRoomCost(costPerDay);

  }

}
