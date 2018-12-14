import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { APP_BASE_HREF } from '@angular/common';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './PageNotFound/error.component';
import { FooterComponent } from './footer/footer.component';
import { CoverComponent } from './cover/cover.component';
import { BrowseComponent } from './browse/browse.component';
import { AboutComponent } from './about/about.component';
import { OptionsComponent } from './options/options.component';
import { AptListComponent } from './browse/apt-list/apt-list.component';
import { AptDetailComponent } from './browse/apt-detail/apt-detail.component';
import { AptEditComponent } from './browse/apt-edit/apt-edit.component';
import { AptItemComponent } from './browse/apt-list/apt-item/apt-item.component';
import { RoomateItemComponent } from './browse/browse-start/roomate-item/roomate-item.component';
import { CityComponent } from './city/city.component';
import { CityEditComponent } from './city/city-edit/city-edit.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import {AppRoutingModule} from './app-routing.module';
import { BrowseStartComponent } from './browse/browse-start/browse-start.component';
import { QuizComponent } from './quiz/quiz.component';
import { RoomItemComponent } from './browse/browse-start/room-item/room-item.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    PageNotFoundComponent,
    FooterComponent,
    CoverComponent,
    BrowseComponent,
    AboutComponent,
    OptionsComponent,
    AptListComponent,
    AptDetailComponent,
    AptItemComponent,
    AptEditComponent,
    RoomateItemComponent,
    CityComponent,
    CityEditComponent,
    MainpageComponent,
    DropdownDirective,
    UserComponent,
    UserEditComponent,
    BrowseStartComponent,
    QuizComponent,
    RoomItemComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgbModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
