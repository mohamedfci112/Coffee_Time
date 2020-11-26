import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from "@angular/router";
@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  username = '';
  ordername = [];
  allorder = [];
  ord = '';
  index;
  constructor(public http: Http, public router:Router) { }

  ngOnInit() {

    if(localStorage.getItem('username') !== null) {
      this.username = localStorage.getItem('username');
    } else {
      this.router.navigate(['/cpanel']);
    }


    this.http.get('https://coffeetime1.000webhostapp.com/backend/adminorders.php').subscribe(
      res => {
        for(var i=0;i<res.json().length; i++) {
          this.ordername[i] = res.json()[i];
        }
      },
      err => {
        console.log(err);
      }
    );

  }



  orderdetail(od) {
    this.ord = od.value;
    const formData = new FormData();
    formData.append('ordername' , od.value);
    this.http.post('https://coffeetime1.000webhostapp.com/backend/orderdetail.php', formData).subscribe(
      (res) => {
        for(var j=0;j<res.json().length;j++) {
          this.allorder[j] = res.json()[j];
        }
      },
      (err) => {
        console.log(err);
      }
    );
    this.allorder = [''];
  }
  delete(od) {
    const formData = new FormData();
    formData.append('ordername' , od.value);
    this.http.post('https://coffeetime1.000webhostapp.com/backend/orderdelete.php', formData).subscribe(
      (res) => {
        location.reload();
      },
      (err) => {
        console.log(err);
      }
    );

  }

}
