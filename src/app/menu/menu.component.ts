import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  show_id: number;
  showName: string;

  // inject location into component constructor
  constructor(
    private actRoute: ActivatedRoute,
    private _router: Router,
    private _location: Location
  ) {
    this.show_id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe(params => {
      this.showName = params.showName;
    });
  }

  // <-- go back to previous location on Back
  goBack() {
    this._location.back();
  }

  // ShowInfo Button OnClick navigates to ShowInfoComponent
  callShowInfo() {
    this._router.navigate(['/show-info', this.show_id], {
      queryParams: { showName: this.showName },
      queryParamsHandling: 'preserve'
    }); //QueryParam for setting show name
  }

  // Episode Button OnClick navigates to EpisodeInfoComponent
  callEpisodeInfo() {
    this._router.navigate(['/episode-info', this.show_id], {
      queryParams: { showName: this.showName },
      queryParamsHandling: 'preserve'
    });
  }

  // Cast Button OnClick navigates to CastInfoComponent
  callCastInfo() {
    this._router.navigate(['/cast-info', this.show_id], {
      queryParams: { showName: this.showName },
      queryParamsHandling: 'preserve'
    });
  }
}
