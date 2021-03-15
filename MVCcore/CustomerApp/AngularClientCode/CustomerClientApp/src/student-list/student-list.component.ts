import { Component, OnInit } from '@angular/core';
import { Customer, Product, Course } from "../CustomerApp/CustomerApp.CustomerModel"
import { HttpClient } from "@angular/common/http"
import * as _ from "lodash"; //* means import all, it is old js framework
import { Global } from 'src/Common/Common.Global';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  ngOnInit() {
    //  this event is ready made and occurs first time when component is loaded
    this.GetfromServer();
    this.GetCoursesfromServer();
  }


  //dependancy injection instead of using httpObj:HttpClient = new HttpClient()
  constructor(public httpObj: HttpClient, public globalObj: Global) {

  }

  title = 'CustomerClientApp';
  productObj: Product = new Product(); //bind with ui
  customerObj: Customer = new Customer(); //binded with UI
  customerList: Array<Customer> = new Array<Customer>(); //collection
  courseList: Array<Course> = new Array<Course>(); //collection
  courseObj: Course = new Course(); //binded with UI
  //errorM: string = '';
  errorList: Array<string> = new Array<string>(); //collection
  jsontest: any;
  selectedCourseId: number = 0;

  date: Date = new Date();



  //take current product and add to customerobj products collection
  AddProduct() {
    this.customerObj.products.push(this.productObj);
    this.productObj = new Product();
  }

  AddCourse() {

    for (let i = 0; i < this.courseList.length; i++) {
      if (this.courseList[i].id == this.selectedCourseId) {
        this.customerObj.courses.push(this.courseList[i]);
      }
    }

  }

  //add in memory
  Add() {
    this.customerList.push(this.customerObj); //adds the current customer obj
    this.customerObj = new Customer(); //reset the customer obj
    //alert("add is called");
  }
  AddtoServer() {
    //=====to solve circular json error======
    //need to use dto data transfer object, basically we passing formgroup in addition to the id,name,address to mvc and mvc doesn't know what is formgroup. so we create a new dto object that copies the id,name and address only,then in the observable post, we pass this custdto instead of this.customerObj
    // var custdto: any = {};
    // custdto.address = this.customerObj.address;
    // custdto.customerName = this.customerObj.customerName;
    // custdto.id = this.customerObj.id;
    // custdto.products = this.customerObj.products; //pass the products list from customerobj to custdto to send to server

    var custdto: any = _.omit(this.customerObj, ['formGroup']); //code on top becomes this, we just want to omit formgroup

    // var custdto:any = {
    //   Id : this.customerObj.Id,
    //   customerName : this.customerObj.customerName,
    //   address : this.customerObj.address
    // };

    //we need to make call to mvc domain https://localhost:44301/
    // var observable = this.httpObj
    //   .post("https://localhost:44301/Customer/Add", custdto); //custdto instead of this.customerObj to not include formgroup to mvc as mvc doesn't know what is formgroup

    //webapi changes the url, it will figure out the add/post by itself
    var observable = this.httpObj
      .post(this.globalObj.customerUrl, custdto);

    observable.subscribe(
      res => this.SuccessObserver(res),
      res => this.ErrorObserver(res)
    )
  }
  SuccessObserver(res: any) { //res is just a variable, data type any
    // for (let element of res) {
    //   var cust: Customer = new Customer();
    //   cust.id = element.id;
    //   cust.address = element.address;
    //   cust.customerName = element.customerName;
    //   cust.products = element.products
    //   this.customerList.push(cust);
    // };


    this.customerList = res; //moved on top
    this.customerObj = new Customer();
  }
  SuccessObserver1(res: any) { //res is just a variable, data type any
    this.courseList = res; //moved on top
    this.courseObj = new Course();
  }
  ErrorObserver(res: any) {
    for (let i = 0; i < res.error.length; i++) {
      this.errorList.push(res.error[i].errorMessage)
    }
    //this.errorM = JSON.stringify(res.message);
    // this.errorList.push(res.error[0].errorMessage);
    // this.errorList.push(res.error[1].errorMessage);
  }



  jsonObserver(res: any) {
    this.jsontest = res;
  }

  GetfromServer() {
    //webapi changes the url, it will figure out the add/post by itself
    var observable = this.httpObj
      .get(this.globalObj.customerUrl);

    observable.subscribe(
      res => this.SuccessObserver(res),
      res => this.ErrorObserver(res)
    )
  }

  GetCoursesfromServer() {
    //webapi changes the url, it will figure out the add/post by itself
    var observable = this.httpObj
      .get(this.globalObj.courseUrl);

    observable.subscribe(
      res => this.SuccessObserver1(res),
      res => this.ErrorObserver(res)
    )
  }


  getjsontest() {
    var observable = this.httpObj
      .get(this.globalObj.customerUrl);

    observable.subscribe(
      res => this.jsonObserver(res)
    )
  }

  SearchfromServer(customerName: string) { //search by name instead of id
    //webapi changes the url, it will figure out the add/post by itself
    var observable = this.httpObj
      .get(this.globalObj.customerUrl + customerName);

    observable.subscribe(
      res => this.SuccessObserver(res),
      res => this.ErrorObserver(res)
    )
  }

  EditInServer() {
    // var custdto: any = {};
    // custdto.address = this.customerObj.address;
    // custdto.customerName = this.customerObj.customerName;
    // custdto.id = this.customerObj.id;

    var custdto: any = _.omit(this.customerObj, ['formGroup']); //code on top becomes this, we just want to omit formgroup

    var observable = this.httpObj
      .put(this.globalObj.customerUrl + custdto.id, custdto);

    observable.subscribe(
      res => this.SuccessObserver(res),
      res => this.ErrorObserver(res)
    )
  }

  DeleteInServer(id: number) {

    var observable = this.httpObj
      .delete(this.globalObj.customerUrl + id);

    observable.subscribe(
      res => this.SuccessObserver(res),
      res => this.ErrorObserver(res)
    )
  }

  //used for edit to display the customer obj response we get from server, create a new customer obj with a formgroup, then display to the angular UI
  Select(selected: Customer) {
    this.customerObj = new Customer();
    this.customerObj.id = selected.id;
    this.customerObj.customerName = selected.customerName;
    this.customerObj.address = selected.address;
    this.customerObj.products = selected.products;
    this.customerObj.courses = selected.courses;
  }

}
