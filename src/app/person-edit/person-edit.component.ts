import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PersonEditComponent implements OnInit {

  person = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getperson(this.route.snapshot.params['id']);
  }

  getperson(id) {
    this.http.get('/person/'+id).subscribe(data => {
      this.person = data;
    });
  }

  updateperson(id) {
    this.http.put('/person/'+id, this.person)
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