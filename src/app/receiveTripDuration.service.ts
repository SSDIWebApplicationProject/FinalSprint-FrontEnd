import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ReceiveTripDuration {
  private tripDuration = new BehaviorSubject<string>('');
  cast = this.tripDuration.asObservable();

  constructor() { }

  collectTripDuration(dataFromHomeComponent) {
    this.tripDuration.next(dataFromHomeComponent);
    console.log(dataFromHomeComponent);
  }

}
