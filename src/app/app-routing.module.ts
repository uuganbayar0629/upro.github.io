import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CanvasAnimationComponent } from './canvas-animation/canvas-animation.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component:AppComponent },
  { path: 'canvas', component:CanvasAnimationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
