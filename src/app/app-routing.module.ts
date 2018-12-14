import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {PageNotFoundComponent} from './PageNotFound/error.component';
import {BrowseComponent} from './browse/browse.component';
import {BrowseStartComponent} from './browse/browse-start/browse-start.component';
import {AptDetailComponent} from './browse/apt-detail/apt-detail.component';
import {QuizComponent} from './quiz/quiz.component';
import {AptEditComponent} from './browse/apt-edit/apt-edit.component';
import {AptListComponent} from './browse/apt-list/apt-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '*', component: PageNotFoundComponent },
  { path: 'quiz', component: QuizComponent},
  { path: 'browse', component: BrowseComponent},

  { path: 'postlisting', component: AptListComponent,children: [
      { path: 'new', component: AptEditComponent},
      { path: ':id', component: AptDetailComponent},
      { path: ':id/edit', component: AptEditComponent}
    ] },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
