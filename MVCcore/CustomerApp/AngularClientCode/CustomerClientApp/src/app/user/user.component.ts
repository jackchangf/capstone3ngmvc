import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public routeObj: Router) { }

  ngOnInit(): void {
    //if user is login, redirect him to home page instead of login page again
    if (localStorage.getItem('token') != null) {
      this.routeObj.navigateByUrl('/home');
    }
  }

}
