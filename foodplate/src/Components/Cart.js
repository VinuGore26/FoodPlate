import React from "react";
import cook from "../img/cookFood.png";

export default function Cart() {
  return (
    <>
      <div className="conatiner d-flex-col m-5 p-5">
        <div className="d-flex justify-content-center align-item-center image-container my-1">
          <img
            src={cook}
            alt="cook"
            style={{ width: "17rem", height: "17rem" }}
          ></img>
        </div>
        <div className="text-center my-0 py-0">
          <h5>Your Cart is Empty</h5>
          <p>You can go to Home page to review more restorance</p>
          <a className="nav-link active" href="/">
            <button
              href="/"
              type="button"
              className="btn btn-warning rounded-0 text-center text-light"
              style={{ backgroundColor: "rgb(255, 133, 51)" }}
            >
              SEE RESTAURANTS NEAR YOU
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
