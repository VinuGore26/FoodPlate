import React from "react";
import logo from '../img/logo.png';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-transparant">
            <div className="container-fluid d-flex-row">
            <Link className="nav-link fs-5 mx-2 text-center align-item-center" to="/"><img src={logo} style={{width: '4rem'}} alt="logo"></img></Link>
            <Link className="nav-link active" to="/">FoodPlate</Link>
                <div className="collapse navbar-collapse container" id="navbar">
                    <div className="col-md-4">
                        <Link className="nav-link active mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-current="page" to="/other">Other <i className="fa-solid fa-angle-down"></i></Link>
                    </div>
                    <div className="col-md-8">
                        <ul className="navbar-nav">
                            <li className="nav-item px-4">
                                <Link className="nav-link active" to="/search"><i className="fa-solid fa-magnifying-glass"></i> Search</Link>
                            </li> 
                            <li className="nav-item px-4">
                                <Link className="nav-link active" to="/offers"><i className="fa-solid fa-wand-magic-sparkles"></i> Offers</Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link className="nav-link active" to="/help"><i className="fa-sharp fa-solid fa-circle-info"></i> Help</Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link className="nav-link active" to="/cart"><i className="fa-sharp fa-solid fa-cart-shopping"></i> Cart</Link>
                            </li>
                            <li className="nav-item px-5" style={{marginLeft: "15%"}}>
                                <Link className="nav-link active" to="/signuplogin"><i className="fa-solid fa-user-large"></i> Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>


    
    </>
  );
}
