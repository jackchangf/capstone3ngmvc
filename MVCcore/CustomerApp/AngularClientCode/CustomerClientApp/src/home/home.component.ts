import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="bg">
    <div class="container text-center">
      <div class="row">
          <div class="col-md-7 col-sm-12">
              <h6>Contonso University</h6>
              <h1>Welcome</h1>
              <p>Student Management System</p>
          </div>
          <div class="col-md-5 col-sm-12">
              <img src="/CustomerClientApp/assets/cp1.jpg" alt="cp1">
          </div>
      </div>    
    </div>
  </div>

  <div class="center">
  <figure>
    <img src="/CustomerClientApp/assets/cp3.jpg" alt="cp3">
    <br />
    <figcaption>Sea otters hold hands when they
    sleep so they don't drift away from each
    other.</figcaption>
  </figure>
  </div>


  `,
  styles: [`
  /*img*/
  img {
    border: 3px solid whitesmoke;
    width: 120%;
    margin-left: -10em;
    margin-top: 3em;
}

  .row .col-md-7 {
    padding: 22vmin 1vmin;
    padding-bottom: 15vmin;
    font-family: var(--Rubik);
    color: white;
    
}

.container .col-md-7 h6 {
    padding: 1vmin;
    letter-spacing: 4px;
    background-color:black;
    clip-path: polygon(30% 0%, 70% 0%, 100% 0, 100% 70%, 70% 100%, 30% 100%, 0 100%, 0% 30%);
}

.container .col-md-7 h1 {
    font-size: 8vmin;
    font-weight: bold;
    padding: 0.1em 0em;
    background-color:black;
    clip-path: polygon(30% 0%, 70% 0%, 100% 0, 100% 70%, 70% 100%, 30% 100%, 0 100%, 0% 30%);
}

.container .col-md-7 p {
    padding: 1vmin 5vmin;
    background-color:black;
    clip-path: polygon(30% 0%, 70% 0%, 100% 0, 100% 70%, 70% 100%, 30% 100%, 0 100%, 0% 30%);
}
.bg {
  background: url('/CustomerClientApp/assets/cp9.jpg') no-repeat center / cover;

}

figure{
  width:50%;
  justify-self:center;
}
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
