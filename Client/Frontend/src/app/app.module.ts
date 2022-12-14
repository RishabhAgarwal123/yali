import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestapiService } from './services/restapi.service';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PageNotFoundComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
