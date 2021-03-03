import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //used for [(ngmodel)]
    HttpClientModule, //used for injections http
    ReactiveFormsModule, NgbModule //used for formgroups validations
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
