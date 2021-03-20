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
              <img src="CustomerClientApp/assets/cp1.jpg" alt="cp1">
          </div>
      </div>    
    </div>
  </div>

  <div class="center">
  <figure>
    <img src="CustomerClientApp/assets/cp3.jpg" alt="cp3">
    <br />
    <figcaption>Sea otters hold hands when they
    sleep so they don't drift away from each
    other.</figcaption>
  </figure>
  </div>

  <!-- Carousel -->
        <div class="container mt-4">
            <div id="carouselExampleCaptions" class="carousel slide shadow" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class=""></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2" class=""></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item">
                        <img src="CustomerClientApp/assets/cp3.jpg" class="d-block w-100" alt="cp3">
                        <div class="carousel-caption d-none d-md-block">
                            <h4>Welcome to Contoso University!</h4>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="CustomerClientApp/assets/cp5.jpg" class="d-block w-100" alt="cp5">
                        <div class="carousel-caption d-none d-md-block">
                            <h4>Staying safe and well in the Campus</h4>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                    <div class="carousel-item active">
                        <img src="CustomerClientApp/assets/cp7.jpg" class="d-block w-100" alt="cp7">
                        <div class="carousel-caption d-none d-md-block">
                            <h4>Mesage from the University Administration</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
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
    font-size: 5vmin;
    font-weight: bold;
    padding: 2vmin 2vmin;
    background-color:black;
    clip-path: polygon(30% 0%, 70% 0%, 100% 0, 100% 70%, 70% 100%, 30% 100%, 0 100%, 0% 30%);
}

.container .col-md-7 p {
    padding: 1vmin 5vmin;
    background-color:black;
    clip-path: polygon(30% 0%, 70% 0%, 100% 0, 100% 70%, 70% 100%, 30% 100%, 0 100%, 0% 30%);
}
.bg {
  background: url('CustomerClientApp/assets/cp9.jpg') no-repeat center / cover;

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
