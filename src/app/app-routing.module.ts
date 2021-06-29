import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapComponent} from './map/map.component';
import {SwitchmapComponent} from './switchmap/switchmap.component'
import { ConcatmapComponent } from './concatmap/concatmap.component';
import { CombineLatestComponent } from './combinelatest/combinelatest.component';

const routes: Routes = [
  {
    path : 'map',
    component : MapComponent,
  },
  {
    path : 'Switch',
    component : SwitchmapComponent,
  },
  {
    path : 'concate',
    component : ConcatmapComponent ,
  },
  {
    path : 'combine',
    component : CombineLatestComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
