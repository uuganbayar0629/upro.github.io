import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {NgxTippyModule} from "ngx-tippy-wrapper";
import {TimelineComponent} from './timeline/timeline.component';
import {TechStackComponent} from './tech-stack/tech-stack.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ArticlesComponent} from './articles/articles.component';
import {ProjectsComponent} from './projects/projects.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {SectionNavComponent} from './section-nav/section-nav.component';
import {AppHeaderComponent} from './app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TechStackComponent,
    AboutComponent,
    HomeComponent,
    ArticlesComponent,
    ProjectsComponent,
    ArticleDetailComponent,
    SectionNavComponent,
    AppHeaderComponent
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
