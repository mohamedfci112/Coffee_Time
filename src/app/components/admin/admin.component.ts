import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http } from "@angular/http";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  username: string = '';
  numOfOrder = '';
  numOfMsg = '';
  constructor(public router:Router, public http:Http) { }

  ngOnInit() {
    if(localStorage.getItem('username') !== null) {
      this.username = localStorage.getItem('username');
    } else {
      this.router.navigate(['/cpanel']);
    }

    this.http.get('https://coffeetime1.000webhostapp.com/backend/ordernum.php').subscribe(
      (res) => {
        this.numOfOrder = res.json()[0];
      },
      (err) => {
        console.log(err);
      }
    );

    this.http.get('https://coffeetime1.000webhostapp.com/backend/messages.php').subscribe(
      (res) => {
        this.numOfMsg = res.json()[0];
      },
      (err) => {
        console.log(err);
      }
    );


  }
  logout(): void {
    localStorage.removeItem('username');
    this.router.navigate(['/cpanel']);
  }

}
