import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PersonCreateComponent implements OnInit {

  person = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveperson() {
    this.http.post('/person', this.person)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/person-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  cancel() {
    this.router.navigate(['/persons']);
  }

}