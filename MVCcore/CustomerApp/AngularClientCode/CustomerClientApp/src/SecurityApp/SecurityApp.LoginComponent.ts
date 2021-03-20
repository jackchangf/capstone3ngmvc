import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Global } from "src/Common/Common.Global";
import { User } from "./SecurityApp.LoginModel";


@Component({
    selector: 'security-login',
    templateUrl: './SecurityApp.Login.html',
    styleUrls: ['./SecurityApp.LoginStyle.css']
})
export class LoginComponent implements OnInit {

    userObj: User = new User();

    constructor(public httpObj: HttpClient,
        public globalObj: Global,
        public routeObj: Router) {

    }

    ngOnInit(): void {

    }


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
        //this.globalObj.token = res.token;
        localStorage.setItem('token', res.token);
        this.GetUserProfile();
        this.globalObj.isUserLoggedIn.next(true);
        //nav to student screen after login token
        this.routeObj.navigateByUrl('students');
    }
    error(res: any) {
        console.log(res);
    }

    GetUserProfile() {
        var observable = this.httpObj.get(this.globalObj.userProfileUrl);

        observable.subscribe(
            res => this.SuccessObserver(res),
            res => this.error(res)
        )
    }

    SuccessObserver(res: any) {
        // Put the object into storage
        localStorage.setItem('userActive', JSON.stringify(res));

        // Retrieve the object from storage
        //var retrievedObject: any = localStorage.getItem('userActive');

        this.globalObj.userActive.next(res);
    }
}