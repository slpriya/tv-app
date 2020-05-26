import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tv-show-app';

  constructor(private _router: Router) { }

  ngOnInit( ): void {
    this._router.navigate(['/search']);
  }


}
