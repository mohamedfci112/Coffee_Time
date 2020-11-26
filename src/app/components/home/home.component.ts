import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
i: any= 0;
alrt: any='hidden';
  send(n,e,s,m) {
    const formData = new FormData();
    formData.append('name',n.value);
    formData.append('email',e.value);
    formData.append('subject',s.value);
    formData.append('message',m.value);
    if (n.value === '') {alert('Enter Your Name');
  } else if (e.value === '') {alert('Enter Your Email');
} else if (s.value === '') {alert('Enter Your Subject');
} else if (m.value === '') {alert('Enter Your Message');
} else {
  this.http.post('https://coffeetime1.000webhostapp.com/backend/contact.php', formData).subscribe((data) => {
        console.log('Got Data is ', data);
      }, (error) => {
        console.log('Sorry Some error is ', error);
      });
      n.value='';
      e.value='';
      s.value='';
      m.value='';
      this.alrt='';
      setTimeout(() => {
        this.alrt='hidden';
     }, 4000);

}
  }
  constructor(private http:Http) { }

  ngOnInit() {

  }

}
