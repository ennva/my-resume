import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Route, ExtraOptions} from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes = [
  {path: 'project', component: ProjectComponent},
  {path: 'curriculum', component: CurriculumComponent},
  {path: '', redirectTo: '/curriculum', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
]

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  enableTracing: true
}

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    CurriculumComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, routerOptions
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
