import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { Global } from 'src/Common/Common.Global';
import { JwtInterceptor } from 'src/Common/Common.Interceptor';
import { MyAuthGuard } from 'src/Common/Common.AuthGuard';
import { UserComponent } from './user/user.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
// import { RouterModule, RoutesRecognized } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    AdminPanelComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, //used for [(ngmodel)]
    HttpClientModule, //used for injections http
    ReactiveFormsModule, //used for formgroups validations
    NgbModule,
    AppRoutingModule,//used for routing
    BrowserAnimationsModule, //used by angular mat
    // RouterModule.forRoot(CustomerRoutes) //to apply to all
    //RouterModule.forChild(routes),
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [Global, MyAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor, multi: true
    }],
  bootstrap: [AppComponent] //changing this will determine what gets loaded up first like templateComponent
})
export class AppModule { }
