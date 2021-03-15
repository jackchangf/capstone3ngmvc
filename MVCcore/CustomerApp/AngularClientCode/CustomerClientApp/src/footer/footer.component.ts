import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  
  <footer>

  <div class="container-fluid p-0">
      <div id="footer-placeholder">
        <div class="row text-left">
          <div class="col-md-5">
              <h1 class="text-light">About Us</h1>
              <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam laudantium asp.</p>
              <p class="pt-1 text-muted">Copyright ©
                  <span>SGUNITED</span>
              </p>
          </div>
          <div class="col-md-5">
              <h4 class="text-light">Newsletter</h4>
              <p class="text-muted">Stay Updated</p>
              <form class="form-inline">
                  <div class="col pl-0">
                      <div class="input-group pr-5">
                          <input type="text" class="form-control bg-dark text-white" placeholder="Email">
                          <div class="input-group-prepend">
                              <div class="input-group-text">
                                  <i class="fas fa-arrow-right"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </form>
          </div>
          <div class="col-md-2 col-sm-12">
              <h4 class="text-light">Follow Us</h4>
              <p class="text-muted">Let us be social</p>
              <div class="column text-light">
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-instagram"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-youtube"></i>
              </div>
          </div>
        </div>
      </div>
  </div>
</footer>
  `,
  styles: [
    `
    /*footer*/


footer {
  background: rgba(0, 0, 0, 0.8);
  overflow-x: hidden;
  padding: 3vmin 18vmin;
  padding-bottom: 10vmin;

  /*position:fixed;
bottom:0px;
width:100%;*/
}

footer p span {
  color: #ff512f;
}

footer input {
  border: none !important;
}

footer input:placeholder {
  color: white !important;
}

footer .input-group .input-group-text {
  background: var(--bggradient);
  border: none;
}

footer .column i {
  color: #dd2476;
  padding: 0 0.5em;
}

/* footer .column i+i {
  padding: 0 0.5em;
} */

    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
