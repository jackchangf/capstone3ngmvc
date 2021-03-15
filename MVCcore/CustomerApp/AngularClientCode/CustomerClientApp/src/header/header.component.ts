import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header>
  <div class="container-fluid p-0">
      <div id="nav-placeholder">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <i class="fas fa-book-reader fa-3x mx-3"></i>
                Contonso University</a>
            <button class="navbar-toggler" type="button" (click)="toggleNavbarCollapsing()" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-align-right text-light"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav" [class.collapse]="navbarCollapsed">
              <div class="mr-auto"></div>
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <a class="nav-link" id="homePage" aria-current="page" routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" id="studentsPage" routerLink="/students" routerLinkActive="active">Students</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" id="coursesPage" routerLink="/courses" routerLinkActive="active">Courses</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" routerLink="/instructors" routerLinkActive="active">Instructors</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" routerLink="/login" routerLinkActive="active">Login</a>
                      </li>
                      <!-- <li class="nav-item dropdown">
                          <div class="dropdown">
                              <a class="nav-link" href="#">Departments</a>
                              <div class="dropdown-content">
                                  <a href="#">Generic</a>
                                  <a href="#">Element</a>
                              </div>
                          </div>
                      </li> -->
                  </ul> 
            </div>
          </div>
        </nav>
        
      </div>
  </div>

  <!--<div class="container text-center">
      <div class="row">
          <div class="col-md-7 col-sm-12">
              <h6>Contonso University</h6>
              <h1>Welcome</h1>
              <p>Student Management System</p>
          </div>
          <div class="col-md-5 col-sm-12">
              <img src="../assets/cp1.jpg" alt="cp1">
          </div>
      </div>    
  </div> -->
  
</header>
  `,
  styles: [`
  header nav a.active {
    background-color: black;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  }
  
  
  * {
    box-sizing: border-box;
  }
  
  header,
  section {
    overflow-x: hidden;
  }
  
  header a {
    font-family: var(--Snigle-font);
    font-size: 0.9em;
    color: whitesmoke;
  }
  
  header {
    background: #dd2476;
    background: linear-gradient(to bottom,
        #dd2476,
        #ff512f);
    /* background: linear-gradient(45deg, red, blue); */
  }
  
  header .nav-item:last-child {
    padding-right: 10.5em;
  }
  
  header .nav-item {
    padding: 0.9em;
  }
  
  header .navbar-brand {
    padding-left: 8rem;
  }
  

  header .nav-link:hover {
    color: black;
  }


  header .row .col-md-5 {
    padding: 4.2vmin 1vmin;
  }
  
  header .row .col-md-7 {
    padding: 22vmin 1vmin;
    padding-bottom: 35vmin;
    font-family: var(--Rubik);
    color: white;
  }
  
  /*header .container {
    background: url('../asset/cp1.jpg');
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
  }*/
  header .container .col-md-7 h6 {
    padding: 1vmin;
    letter-spacing: 4px;
  }
  
  header .container .col-md-7 h1 {
    font-size: 8vmin;
    font-weight: bold;
    padding: 0.1em 0em;
  }
  
  header .container .col-md-7 p {
    padding: 1vmin 5vmin;
  }
  
  header .container .col-md-7 button {
    border-radius: 30px;
    font-weight: bold;
  }
  
  `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
