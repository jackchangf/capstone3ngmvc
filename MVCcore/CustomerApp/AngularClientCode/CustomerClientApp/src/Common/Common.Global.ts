import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { User } from "src/app/app.model";


// global var injected in modules providers as service
@Injectable()
export class Global {
    customerUrl: string = "https://localhost:44301/api/CustomerAPI/";
    securityUrl: string = "https://localhost:44301/api/Account/Login";
    courseUrl: string = "https://localhost:44301/api/CourseAPI/";
    registerUrl: string = "https://localhost:44301/api/Account/Register";
    userProfileUrl: string = "https://localhost:44301/api/userprofile"
    // customerUrl: string = "https://jackchangf.azurewebsites.net/api/CustomerAPI/";
    // securityUrl: string = "https://jackchangf.azurewebsites.net/api/Security";
    // courseUrl: string = "https://jackchangf.azurewebsites.net/api/CourseAPI";
    //token: string = ""; //used localStorage instead
    public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public userActive: BehaviorSubject<User> = new BehaviorSubject<User>({} as any);


    CheckToken() {
        if ((localStorage.getItem('token') != null)) {
            return true;
        }
        else {
            return false;
        }
    }

    roleMatch(allowedRoles: any[]): boolean {
        var isMatch = false;
        var payLoad = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));
        var userRole = payLoad.role;
        allowedRoles.forEach((element: any) => {
            if (userRole == element) {
                isMatch = true;
                //return false;
            }
        });
        return isMatch;
    }
}