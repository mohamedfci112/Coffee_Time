import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
  lat: any = 29.9966141151866;
  lng: any = 31.260692130695247;
  latLocation: any = '';
  lngLocation: any = '';
  option: any = [];
  quntity: any = [];
  all: any = [];
  i: any = 0;
  disply: any ='';
  phone: any= '';
  phoneerror: any= 'hidden';
  locerror: any= 'hidden';
  index1: number;
  index2: number;
  index3: number;
  index4: number;
  isdisabled= 'Delete';
  /* add qoffee button event */
  Click(o, q) {
    if (o.value === '') {
      alert('Please Enter Your Coffee Type');
    } else if (q.value === '') {
      alert('Please Enter Quantity');
    } else {
      while (o.value !== '') {
        this.option[this.i] = o.value;
  this.quntity[this.i] = q.value;
  this.all[this.i] = [this.option[this.i] , this.quntity[this.i]];
  o.value = '';
  q.value = '';
  this.i++;
        }
    }
  }
  phonekeyup(p) {
    this.phone = p.target.value;
    if (this.phone !== '') {
      this.phoneerror = 'hidden';
    }
  }
/* selct location btn */
  maplocation(event) {
      this.latLocation = event.coords.lat;
      this.lngLocation = event.coords.lng;
      if (this.latLocation !== '' && this.lngLocation !== '') {
        this.locerror = 'hidden';
      }
  }
  /* send btn */
  send(ph) {
    const formData = new FormData();
    for(let j = 0;j < this.option.length; j++) {
      formData.append('coffee[]' , this.option[j]);
    }
    for(let k = 0;k < this.quntity.length; k++) {
      formData.append('quantity[]' , this.quntity[k]);
    }
    formData.append('lat' , this.latLocation);
    formData.append('lng' , this.lngLocation);
    formData.append('phone', this.phone);
    if (this.all.length === 0) {
      alert('Please Enter Your Coffee & Quantity First..');
    } else if (this.phone === '') {
      this.phoneerror = '';
    } else if (this.latLocation ==='' && this.lngLocation === '') {
      this.locerror = '';
    } else if (this.quntity.length === 0 || this.option.length === 0) {
      alert("You Doesn't Select Any Thing Choose First Then Click Send Button");
    } else {
      this.http.post('https://coffeetime1.000webhostapp.com/backend/order.php', formData).subscribe((data) => {
      }, (error) => {
        console.log('Sorry Some error is ', error);
      });

      alert('Your Request Is Sent...Thanks!');
      setTimeout(()=> {
        window.location.reload();
      },1000);

    }
  }

  /* delete item */

  deleteItem(t,n,e) {
      e.target.setAttribute("hidden" , true);
  this.index3= this.option.indexOf(t.value);
  this.index4= this.quntity.indexOf(n.value);
  this.option.splice(this.index3, 1);
  this.quntity.splice(this.index4, 1);
  this.all.splice(this.index3, 1,'');
}

  constructor(public http: Http) {
  }

  ngOnInit() {

  }

}
