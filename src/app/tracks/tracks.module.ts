import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { TrackformComponent } from './trackform/trackform.component';
import { TracklistComponent } from './tracklist/tracklist.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LayoutComponent,
    TrackformComponent,
    TracklistComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LayoutComponent,
    TrackformComponent,
    TracklistComponent
  ]
})
export class TracksModule { }
