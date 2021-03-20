import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/app.model';
import { Global } from 'src/Common/Common.Global';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.style.css']
})
export class HeaderComponent implements OnInit {

  // Define a variable to use for showing/hiding the Login button
  isUserLoggedIn: boolean = false;
  user: User = new User();

  constructor(public routerObj: Router, public global: Global, public http: HttpClient) {
    // Subscribe here, this will automatically update 
    // "isUserLoggedIn" whenever a change to the subject is made.
    this.global.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });

    this.global.userActive.subscribe(value => {
      this.user = value;
    });
  }

  ngOnInit(): void {
    if (this.global.CheckToken()) {
      var userActive: any = localStorage.getItem('userActive');
      this.user = JSON.parse(userActive);
    }
    else {

    }
  }

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  LogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userActive');
    this.global.isUserLoggedIn.next(false);
    this.global.userActive.next({} as any);
    this.routerObj.navigateByUrl('user/login');
  }


}
