import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodbank',
  templateUrl: './foodbank.component.html',
  styleUrls: ['./foodbank.component.less']
})
export class FoodbankComponent implements OnInit {
  private requested = false;

  constructor() { }

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
