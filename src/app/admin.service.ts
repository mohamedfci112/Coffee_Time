import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Response } from "@angular/http";
import { catchError } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private BASE_URL: string = 'https://coffeetime1.000webhostapp.com/backend/';
  constructor(private http: Http ) { }

  login(admin): Observable<any> {
    return this.http.post(this.BASE_URL+'admin.php',admin).pipe(map(
      (res: Response)=> {
        return {status: res.status, result: res.json()};

      }
    )).pipe( catchError(
        (error: Error) => {
          return Observable.throw(new Error(error.message));
        }
      )
    );
  }
}
