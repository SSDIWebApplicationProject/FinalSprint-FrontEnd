import { Component, OnInit } from '@angular/core';
import { ReceiveTripDuration } from '../receiveTripDuration.service';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-room-price',
  templateUrl: './room-price.component.html',
  styleUrls: ['./room-price.component.css']
})
export class RoomPriceComponent implements OnInit {
  tripDuration = '';
  roomName = '';
  distanceFromAirport = '';
  noOfBedrooms = '';
  noOfBathrooms = '';
  imageURL = '';
  costPerDay = '';
  totalCost = 0;

  constructor(private detailsInRoomPrice: ReceiveTripDuration, private searchSerive: SearchService ) { }

  ngOnInit() {
    // this.detailsInRoomPrice.cast.subscribe(date=> this.date = date);
    this.detailsInRoomPrice.cast.subscribe(tripDuration => this.tripDuration = tripDuration);

    this.searchSerive.cast.subscribe(roomName => this.roomName = roomName);
    this.searchSerive.cast1.subscribe(distanceFromAirport => this.distanceFromAirport = distanceFromAirport);
    this.searchSerive.cast2.subscribe(noOfBedrooms => this.noOfBedrooms = noOfBedrooms);
    this.searchSerive.cast3.subscribe(noOfBathrooms => this.noOfBathrooms = noOfBathrooms);
    this.searchSerive.cast4.subscribe(imageURL => this.imageURL = imageURL);
    this.searchSerive.cast5.subscribe(costPerDay => this.costPerDay = costPerDay);
    this.totalCost = Number(this.costPerDay) * Number(this.tripDuration);
    }

  sendTotal() {
    this.searchSerive.collectTotalCost(this.totalCost);
  }


}
