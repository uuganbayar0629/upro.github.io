import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {NgxTippyModule} from "ngx-tippy-wrapper";
import { TimelineComponent } from './timeline/timeline.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TechStackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxTippyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
