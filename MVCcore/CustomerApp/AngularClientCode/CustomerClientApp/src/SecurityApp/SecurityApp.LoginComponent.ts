import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Global } from "src/Common/Common.Global";
import { User } from "./SecurityApp.LoginModel";


@Component({
    selector: 'security-login',
    templateUrl: './SecurityApp.Login.html',
    styleUrls: ['./SecurityApp.LoginStyle.css']
})
export class LoginComponent {
    constructor(public httpObj: HttpClient,
        public globalObj: Global,
        public routeObj: Router) {

    }

    userObj: User = new User();
    Login() {
        // we will make a call to mvc to get token
        // alert(this.userObj.userName + " " + this.userObj.password);

        var observable = this.httpObj.post(this.globalObj.securityUrl, this.userObj);
        //var observable = this.httpObj.post("https://jackchangf.azurewebsites.net/api/Security", this.userObj);

        observable.subscribe(
            res => this.success(res),
            res => this.error(res)
        );
    }

    success(res: any) {
        this.globalObj.token = res.Value;

        //nav to student screen after login token
        this.routeObj.navigateByUrl('students');
    }
    error(res: any) {
        console.log(res);
    }
}