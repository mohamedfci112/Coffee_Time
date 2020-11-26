import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AdminService } from "../../admin.service";
import { Http } from "@angular/http";

@Component({
  selector: 'app-cpanel',
  templateUrl: './cpanel.component.html',
  styleUrls: ['./cpanel.component.css']
})
export class CpanelComponent implements OnInit {

  loginForm: FormGroup;
  errorMsg: string ='';
  constructor(public router:Router,
    private formBuilder: FormBuilder,
    public adminService: AdminService,
    public http: Http) { }

  ngOnInit() {

  }
  login(u, p) {
    const formData = new FormData();
    formData.append('username' , u.value);
    formData.append('password' , p.value);
    this.adminService.login(formData).subscribe(
      res => {
        if(res.result) {
          localStorage.setItem('username', u.value);
          this.router.navigate(['/admin']);
        } else {
          this.errorMsg = 'Invalid Account';
        }
      },
      error => {
        this.errorMsg = error;
      }

    );
  }

}
