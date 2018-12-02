import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  private requested = false;
  constructor() { }

  latitude = 51.678418;
  longitude = 7.809007;
  locationChosen = false;

  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  ngOnInit() {
    
  }

  public requestFood(): void {
    this.requested = true;
  }
  public get requestColor(): string {
    return this.requested ? 'warn' : 'primary';
  }
  public get requestStatus(): string {
    return this.requested ? 'Requested' : 'Request';
  }

}
