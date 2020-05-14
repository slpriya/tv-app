import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ISeasonListData } from './iseason-list-data';
import { map } from 'rxjs/operators';
import { ISeasonListView } from './iseason-list-view';

@Injectable({
  providedIn: 'root'
})
export class SeasonsListServiceService {

  constructor(private httpClient : HttpClient) { }

  getShowSeasons(showId: number){
    return this.httpClient.get<ISeasonListData[]>(`${environment.baseurl}${environment.seasonEndpoint}${showId}/seasons`).pipe(map((data:ISeasonListData[])=>data.map(item => this.transformISeasonDataToView(item))));
  }


  transformISeasonDataToView(data: ISeasonListData): ISeasonListView {
    return {
      seasonId:data.id,
      seasonNumber : data.number
    }
  }
}





