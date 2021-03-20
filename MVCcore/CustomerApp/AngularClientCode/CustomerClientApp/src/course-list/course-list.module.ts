import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-list-routing.module';
import { CourseListComponent } from './course-list.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
    declarations: [CourseListComponent],
    imports: [
        CommonModule,
        CourseRoutingModule,

        FormsModule, //used for [(ngmodel)]
        HttpClientModule, //used for injections http
        ReactiveFormsModule, //used for formgroups validations
        MatSelectModule,
        NgbModule,
    ]
})
export class CourseListModule { }