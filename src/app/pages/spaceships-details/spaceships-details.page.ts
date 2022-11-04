import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-spaceships-details',
  templateUrl: './spaceships-details.page.html',
  styleUrls: ['./spaceships-details.page.scss'],
})
export class SpaceshipsDetailsPage implements OnInit {

  ship: any;
 
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
 
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://swapi.dev/api/starships/${id}`).subscribe(res => {
      this.ship = res;
    });
  }

}
