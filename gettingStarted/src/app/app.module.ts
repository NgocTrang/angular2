import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {Github} from "./github/shared/github";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {About} from './about/about';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Home} from "./home/home";
import {OtherComponent} from "./OtherComponent/OtherComponent";
import {AnotherComponent} from "./AnotherComponent/AnotherComponent";
import {RedditApp} from "./app_ex/app_ex";
import {ArticleComponent} from "./article/article";


@NgModule({
  declarations: [
    AppComponent,
    About,
    RepoBrowser,
    RepoList,
    RepoDetail,
    Home,
    OtherComponent,
    AnotherComponent,
    RedditApp,
    ArticleComponent,
  ],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [Github, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
