// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';

// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { LoginComponent } from 'src/SecurityApp/SecurityApp.LoginComponent';
// // import { AppComponent } from './CustomerApp.CreateComponent';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// // import { AppRoutingModule, routingComponents } from './app-routing.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSelectModule } from '@angular/material/select';
// import { Global } from 'src/Common/Common.Global';
// import { JwtInterceptor } from 'src/Common/Common.Interceptor';
// import { MyAuthGuard } from 'src/Common/Common.AuthGuard';
// import { AppComponent } from './CustomerApp/CustomerApp.CreateComponent';
// // import { CustomerModule } from './CustomerApp/CustomerApp.CustomerModule';
// import { HomeRoutes } from './HomeRoutes';
// import { RouterModule } from '@angular/router';



// @NgModule({
//     declarations: [
//         // AppComponent,
//         // routingComponents,
//         HeaderComponent,
//         FooterComponent,
//         LoginComponent
//     ],
//     imports: [
//         BrowserModule,
//         FormsModule, //used for [(ngmodel)]
//         HttpClientModule, //used for injections http
//         ReactiveFormsModule, //used for formgroups validations
//         NgbModule,
//         // AppRoutingModule,
//         BrowserAnimationsModule, //used for routing
//         // RouterModule.forRoot(CustomerRoutes) //to apply to all 
//         RouterModule.forRoot(HomeRoutes),
//         MatSelectModule
//     ],
//     providers: [Global, MyAuthGuard,
//         {
//             provide: HTTP_INTERCEPTORS,
//             useClass: JwtInterceptor, multi: true
//         }],
//     bootstrap: [AppComponent] //changing this will determine what gets loaded up first like templateComponent
// })
// export class HomeModule {

// }


