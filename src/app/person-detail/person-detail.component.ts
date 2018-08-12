import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class PersonDetailComponent implements OnInit {

  person = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getpersonDetail(this.route.snapshot.params['id']);
  }

  getpersonDetail(id) {
    this.http.get('/person/'+id).subscribe(data => {
      this.person = data;
    });
  }

  deleteperson(id) {
  this.http.delete('/person/'+id)
    .subscribe(res => {
        this.router.navigate(['/persons']);
      }, (err) => {
        console.log(err);
      }
    );
}

}