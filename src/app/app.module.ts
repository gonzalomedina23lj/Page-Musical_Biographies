import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistdetailComponent } from './components/artistdetail/artistdetail.component';
import { PhotosliderComponent } from './components/photoslider/photoslider.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ArtistdetailComponent,
    PhotosliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
