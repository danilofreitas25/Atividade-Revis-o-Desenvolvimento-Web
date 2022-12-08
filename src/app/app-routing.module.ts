import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './tracks/home/home.component';
import { TrackformComponent } from './tracks/trackform/trackform.component';
import { TracklistComponent } from './tracks/tracklist/tracklist.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pistas', component: TracklistComponent},
  {path: 'cadastro', component: TrackformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
