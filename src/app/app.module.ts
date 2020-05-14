import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowSingleSearchComponent } from './show-single-search/show-single-search.component';
import { ShowDataService } from './show-data.service';
import { HttpClientModule } from '@angular/common/http';
import { SeasonsListComponentComponent } from './seasons-list-component/seasons-list-component.component';
import { SeasonsListServiceService } from './seasons-list-service.service';
import { ShowEpisodesListComponent } from './show-episodes-list/show-episodes-list.component';
import { EpisodeServiceService } from './episode-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowSingleSearchComponent,
    SeasonsListComponentComponent,
    ShowEpisodesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShowDataService,SeasonsListServiceService,EpisodeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
