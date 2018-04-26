
import { Component } from '@angular/core';
import {Search} from '../model/personalInfo.model';
import { NgModel} from '@angular/forms';
import { NgForm} from '@angular/forms';
import {SearchService} from '../search.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalInfo.component.html',
  styleUrls: ['./personalInfo.component.css']


})



export class PersonalInfoComponent {
  userinfo: Search;
  message: Object;
  constructor(private http: HttpClient, public serSer: SearchService ) {
    this.userinfo = new Search();
  }

  private userURL = 'http://localhost:4200/user';


  RegisterUser() {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  /*const body = JSON.stringify(this.search, {headers: headers});*/
  const body = JSON.stringify(this.userinfo);
  console.log(body);
  this.http.post(
    this.userURL, body, httpOptions).subscribe(
    data => {this.message = data; console.log(this.message); },
    err => { console.log(err); }

  );
}

}



