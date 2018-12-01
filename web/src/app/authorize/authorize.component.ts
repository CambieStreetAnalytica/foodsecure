import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.less']
})
export class AuthorizeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  public authorize(): void {
    this._router.navigate(['/authorize']);
  }

}
