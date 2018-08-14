import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PersonComponent implements OnInit {

  persons: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };

    this.http.get('/api/person', httpOptions).subscribe(data => {
      this.persons = data;
      console.log(this.persons);
    }, err => {
      if (err.status === 401) {
        this.router.navigate(['login']);
      }
    });
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }

}
