import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Payment} from '../model/payment.model';
import { HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { SearchService } from '../search.service';

import { NgModel} from '@angular/forms';
import { NgForm} from '@angular/forms';
import {Search} from '../model/search.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']


})

@Injectable()
export class PaymentComponent implements OnInit {
  totalcost: string;
  payment: Payment;
  message: object;
  private paymentURL = 'http://localhost:4200/payment';
  constructor(private http: HttpClient, private searchService: SearchService ) {
    this.payment = new Payment();
  }
  ngOnInit() {

    this.searchService.cast6.subscribe(totalcost => this.totalcost = totalcost);
    this.payment.totalAmount = this.totalcost;
    console.log(this.payment.totalAmount);
  }
  validate() {
    console.log(this.payment);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    /*const body = JSON.stringify(this.search, {headers: headers});*/
    const body = JSON.stringify(this.payment);
    this.http.post(
      this.paymentURL, body, httpOptions).subscribe(
      data => {this.message = data; console.log(this.message); },
      err => { console.log(err); }

    );
    }
}
