import React from "react";
import logo from '../img/logo.png';
import playStore from "../img/play-store.png";

export default function Footer() {

  return (
    <>
        <div className="py-4" style={{backgroundColor: 'rgb(230, 230, 230)'}}>
          <div className="container d-flex mx-5 px-5">
            <div className="px-5 mx-5">
              <h3>For Better Experience Download, the GoFoody App</h3>
            </div>
            <img className="mx-5" alt="playstore" src={playStore} style={{width: '26rem', height: '4rem'}}></img>
          </div>
        </div>

        <div className="footer-body text-light" style={{backgroundColor: 'black'}}>
          <footer className="container py-5">
            <div className="container row">
              <div className="d-flex flex-column flex-sm-row justify-content-between py-2 px-0">
                <div className="col-md-4 d-flex align-items-center">
                  <a className="d-flex text-center" href="/"><img src={logo} alt="logo" className="my-0 rounded-circle p-1" style={{width: '3rem', cursor: 'pointer', backgroundColor: 'white'}}></img></a>
                  <span className="mb-3 mx-2 mb-md-0 text-light"> © 2023 GoFoody | IND</span>
                </div>
                <ul className="nav col-md-4 justify-content-end d-flex align-item-end my-3">
                  <li><a className="d-flex" style={{textDecoration: 'none'}} href="/"><i className="fa-brands fa-facebook-f p-2 rounded-circle text-secondary"></i></a></li>
                  <li><a className="d-flex" style={{textDecoration: 'none'}} href="/"><i className="fa-brands fa-instagram p-2 rounded-circle text-secondary"></i></a></li>
                  <li><a className="d-flex" style={{textDecoration: 'none'}} href="/"><i className="fa-brands fa-twitter p-2 rounded-circle text-secondary"></i></a></li>
                </ul>
              </div>

              <hr/> 
              <div className="container row my-5">
                <div className="col-6 col-md-2 mb-3">
                  <h5>Section</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Home</a></li>
                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Features</a></li>
                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">About</a></li>
                  </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                  <h5>Section</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Home</a></li>
                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Features</a></li>
                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">About</a></li>
                  </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                  <h5>Section</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Home</a></li>
                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Features</a></li>
                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">About</a></li>
                  </ul>
                </div>

                <div className="col-md-5 offset-md-1 mb-3">
                  <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of what's new and exciting from us.</p>
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                      <label for="newsletter1" className="visually-hidden">Email address</label>
                      <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                      <button className="btn btn-primary" type="button">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </footer>
        </div>
    </>
  );
}
