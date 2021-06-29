import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapComponent } from './map/map.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CombineLatestComponent } from './combinelatest/combinelatest.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';




@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SwitchmapComponent,
    CombineLatestComponent,
    ConcatmapComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
