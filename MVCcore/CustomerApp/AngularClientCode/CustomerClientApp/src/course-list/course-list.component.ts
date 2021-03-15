import { Component, OnInit } from '@angular/core';
import { Customer, Product, Course } from "../CustomerApp/CustomerApp.CustomerModel"
import { HttpClient } from "@angular/common/http"
import * as _ from "lodash"; //* means import all, it is old js framework
import { Global } from 'src/Common/Common.Global';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  //dependancy injection instead of using httpObj:HttpClient = new HttpClient()
  constructor(public httpObj: HttpClient, public globalObj: Global) {

  }

  ngOnInit(): void {
    this.GetCoursesfromServer();
  }

  courseObj: Course = new Course(); //binded with UI
  courseList: Array<Course> = new Array<Course>(); //collection
  //errorM: string = '';
  errorList: Array<string> = new Array<string>(); //collection

  GetCoursesfromServer() {
    //webapi changes the url, it will figure out the add/post by itself
    var observable = this.httpObj
      .get(this.globalObj.courseUrl);

    observable.subscribe(
      res => this.SuccessObserver(res),
      res => this.ErrorObserver(res)
    )
  }

  AddtoServer() {

    var coursedto: any = _.omit(this.courseObj, ['formGroup']); //code on top becomes this, we just want to omit formgroup

    //webapi changes the url, it will figure out the add/post by itself
    var observable = this.httpObj
      .post(this.globalObj.courseUrl, coursedto);

    observable.subscribe(
      res => this.SuccessObserver(res),
      res => this.ErrorObserver(res)
    )
  }

  SearchfromServer(courseName: string) { //search by name instead of id
    //webapi changes the url, it will figure out the add/post by itself
    var observable = this.httpObj
      .get(this.globalObj.courseUrl + courseName);

    observable.subscribe(
      res => this.SuccessObserver(res),
      res => this.ErrorObserver(res)
    )
  }

  EditInServer() {

    var coursedto: any = _.omit(this.courseObj, ['formGroup']); //code on top becomes this, we just want to omit formgroup

    var observable = this.httpObj
      .put(this.globalObj.courseUrl + coursedto.id, coursedto);

    observable.subscribe(
      res => this.SuccessObserver(res),
      res => this.ErrorObserver(res)
    )
  }


  DeleteInServer(id: number) {

    var observable = this.httpObj
      .delete(this.globalObj.courseUrl + id);

    observable.subscribe(
      res => this.SuccessObserver(res),
      res => this.ErrorObserver(res)
    )
  }

  //used for edit to display the customer obj response we get from server, create a new customer obj with a formgroup, then display to the angular UI
  Select(selected: Course) {
    this.courseObj = new Course();
    this.courseObj.id = selected.id;
    this.courseObj.courseName = selected.courseName;

  }

  SuccessObserver(res: any) { //res is just a variable, data type any
    this.courseList = res; //moved on top
    this.courseObj = new Course();
  }
  ErrorObserver(res: any) {
    for (let i = 0; i < res.error.length; i++) {
      this.errorList.push(res.error[i].errorMessage)
    }
  }
}
