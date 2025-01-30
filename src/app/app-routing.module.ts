import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {ArticlesComponent} from "./articles/articles.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ArticleDetailComponent} from "./article-detail/article-detail.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'about', component:AboutComponent },
  { path: 'articles', component:ArticlesComponent },
  { path: 'article/detail', component:ArticleDetailComponent },
  { path: 'projects', component:ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
