import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  markers = [];

  constructor() {}

  ngOnInit() {
    let coords = {
      lat: 51.678418,
      lng: 7.809007
    }

    for (let _i = 0; _i < 5000; _i++) {
      coords.lat += 0.000010;
      coords.lng += 0.000010;
      this.markers.push(Object.assign({}, coords))
    }
    console.log(this.markers)
  }
}
