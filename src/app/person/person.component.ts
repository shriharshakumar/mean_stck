import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PersonComponent implements OnInit {

  persons: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/person').subscribe(data => {
      this.persons = data;
    });
  }

}
