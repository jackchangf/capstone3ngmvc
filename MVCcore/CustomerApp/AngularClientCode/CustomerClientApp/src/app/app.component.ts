import { Component } from '@angular/core';
import { Customer, Product } from "./app.model"
import { HttpClient } from "@angular/common/http"
import * as _ from "lodash"; //* means import all, it is old js framework

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    //  this event is ready made and occurs first time when component is loaded
    this.GetfromServer();
  }


  //dependancy injection instead of using httpObj:HttpClient = new HttpClient()
  constructor(public httpObj: HttpClient) {

  }

  title = 'CustomerClientApp';
  productObj: Product = new Product(); //bind with ui
  customerObj: Customer = new Customer(); //binded with UI
  customerList: Array<Customer> = new Array<Customer>(); //collection
  //errorM: string = '';
  errorList: Array<string> = new Array<string>(); //collection

  //take current product and add to customerobj products collection
  AddProduct() {
    this.customerObj.products.push(this.productObj);
    this.productObj = new Product();
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
      .post("https://localhost:44301/Api/CustomerAPI", custdto);

    observable.subscribe(
      res => this.SuccessObserver(res),
      res => this.ErrorObserver(res)
    )
  }
  SuccessObserver(res: any) { //res is just a variable, data type any
    this.customerList = res;
    this.customerObj = new Customer();
  }
  ErrorObserver(res: any) {
    for (let i = 0; i < res.error.length; i++) {
      this.errorList.push(res.error[i].errorMessage)
    }
    //this.errorM = JSON.stringify(res.message);
    // this.errorList.push(res.error[0].errorMessage);
    // this.errorList.push(res.error[1].errorMessage);
  }

  GetfromServer() {
    //webapi changes the url, it will figure out the add/post by itself
    var observable = this.httpObj
      .get("https://localhost:44301/Api/CustomerAPI");

    observable.subscribe(
      res => this.SuccessObserver(res),
      res => this.ErrorObserver(res)
    )
  }

  SearchfromServer(customerName: string) { //search by name instead of id
    //webapi changes the url, it will figure out the add/post by itself
    var observable = this.httpObj
      .get("https://localhost:44301/Api/CustomerAPI/" + customerName);

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
      .put("https://localhost:44301/Api/CustomerAPI/" + custdto.id, custdto);

    observable.subscribe(
      res => this.SuccessObserver(res),
      res => this.ErrorObserver(res)
    )
  }

  DeleteInServer(id: number) {

    var observable = this.httpObj
      .delete("https://localhost:44301/Api/CustomerAPI/" + id);

    observable.subscribe(
      res => this.SuccessObserver(res),
      res => this.ErrorObserver(res)
    )
  }


}
