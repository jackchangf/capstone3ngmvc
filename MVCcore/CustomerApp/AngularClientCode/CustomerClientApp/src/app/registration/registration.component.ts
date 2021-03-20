import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Global } from 'src/Common/Common.Global';
import { User } from '../app.model';
import * as _ from "lodash"; //* means import all, it is old js framework

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userObj: User = new User();
  errorList: Array<string> = new Array<string>(); //collection
  succeeded: string = "";

  constructor(public httpObj: HttpClient, public globalObj: Global) { }

  ngOnInit(): void {
  }


  RegistertoServer() {
    var userDto: any = _.omit(this.userObj, ['formGroup']);

    var observable = this.httpObj
      .post(this.globalObj.registerUrl, userDto);

    observable.subscribe(
      res => this.SuccessObserver(res),
      res => this.ErrorObserver(res)
    )
  }
  SuccessObserver(res: any) {
    if (res.Succeeded) {
      this.userObj.formGroup.reset();
    }
    // this.userObj = new User();
  }
  ErrorObserver(res: any) {
    // for (let i = 0; i < res.errors.length; i++) {
    //   this.errorList.push(res.errors[i])
    //}
  }

}
