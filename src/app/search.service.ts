import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService {

  private roomName = new BehaviorSubject<string>('');
  private distanceFromAirport = new BehaviorSubject<string>('');
  private noOfBedrooms = new BehaviorSubject<string>('');
  private noOfBathrooms = new BehaviorSubject<string>('');
  private imageURL = new BehaviorSubject<string>('');
  private costPerDay = new BehaviorSubject<string>('');
  private totalCost = new BehaviorSubject<string>('');

  cast = this.roomName.asObservable();
  cast1 = this.distanceFromAirport.asObservable();
  cast2 = this.noOfBedrooms.asObservable();
  cast3 = this.noOfBathrooms.asObservable();
  cast4 = this.imageURL.asObservable();
  cast5 = this.costPerDay.asObservable();
  cast6 = this.totalCost.asObservable();


  constructor() { }

  collectRoomName(dataFromSearchRoomComponent) {
    this.roomName.next(dataFromSearchRoomComponent);
    console.log("Room Name transferred to Service: " + dataFromSearchRoomComponent);
  }

  collectDistanceFromAirport(dataFromSearchRoomComponent) {
    this.distanceFromAirport.next(dataFromSearchRoomComponent);
    console.log("Distance From airport transferred to Service: " + dataFromSearchRoomComponent);
  }

  collectNoOfBedrooms(dataFromSearchRoomComponent) {
    this.noOfBedrooms.next(dataFromSearchRoomComponent);
    console.log("No. Of bedrooms transferred to Service: " + dataFromSearchRoomComponent);
  }

  collectNoOfBathrooms(dataFromSearchRoomComponent) {
    this.noOfBathrooms.next(dataFromSearchRoomComponent);
    console.log("No. Of bathrooms transferred to Service: " + dataFromSearchRoomComponent);
  }
  collectRoomImage(dataFromSearchRoomComponent) {
    this.imageURL.next(dataFromSearchRoomComponent);
    console.log("No. Of bathrooms transferred to Service: " + dataFromSearchRoomComponent);
  }

  collectRoomCost(dataFromSearchRoomComponent) {
    this.costPerDay.next(dataFromSearchRoomComponent);
    console.log("cost transferred to Service: " + dataFromSearchRoomComponent);
  }
  collectTotalCost(totalcost) {
    this.totalCost.next(totalcost);
    console.log("total cost transferred to Service: " + totalcost);
  }
}
