import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  items: object = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const data = this.http.get('https://jsonplaceholder.typicode.com/albums');
    console.log(data);
  }

}
