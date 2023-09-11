import React from 'react';
import onlineFood from '../img/online-food.gif';
import truk from '../img/truk.svg';
import food from '../img/food.svg';
import chef from '../img/chef.png';
import variety from '../img/variety.png';
import food1 from '../img/f1.png';
import food2 from '../img/f2.png';
import food3 from '../img/f3.jpg';
import food4 from '../img/f4.jpg';
import food5 from '../img/f5.jpg';
import food6 from '../img/f6.jpg';
import food7 from '../img/f7.jpg';
import food8 from '../img/f8.jpg';
import food9 from '../img/f9.jpg';
import food10 from '../img/f10.jpg';
import food11 from '../img/f11.jpg';
import food12 from '../img/f12.jpg';
import food13 from '../img/f13.jpg';
import food14 from '../img/f14.jpg';
import food15 from '../img/f15.jpg';
import food16 from '../img/f16.jpg';


export default function Content() {
  return (
        <>
            {/* <div className="container my-5">
                <h1>Welcome To GoFoody</h1>
                <p>lorem ipsum dolor sit amet, consectetur adip lorem.ipsum dolor sit.consectetur adip lorem.ipsum dolor sit.consectetur adip lorem.ipsum dolor sit.</p>
                <button type="button" className="btn btn-primary my-4">Know More</button>
            </div> */}

            <div className="mx-5 p-5" style={{width: '80rem', marginTop: '3rem', display: 'flex', justifyContent: 'space-between'}}>
                <div className="card-body" >
                    <h1 className="card-title">Welcome to GoFoody</h1>
                    <h3 className="card-subtitle mb-2 text-body-secondary"><span className="text-danger">Hungry?</span> Here for you</h3> 
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a className="btn btn-success" href="/" role="button">Know More</a>
                    {/* <img className="my-1" src={login} alt="onlineFood" style={{display: 'flex', flexDirection: 'column', width: '30rem', height: '20rem'}}/> */}
                </div>
            <div>
                <img src={onlineFood} alt="onlineFood" style={{width: '35rem', height: '25rem', marginLeft: '15rem'}}/>
                </div>
            </div>

            <div className="container mx-5 p-5 d-flex text-center algin-item-center">
                <div className="card-body">
                    <img src={truk} alt="truk" style={{width: '5rem', height: '5rem'}}/>
                    <h5>Fast Delivery</h5>
                    <p>Here is the fast delivery service</p>
                </div>
                <div className="card-body">
                    <img src={food} alt="food" style={{width: '5rem', height: '5rem'}}/>
                    <h5>Fresh Food</h5>
                    <p>Here is the fast delivery service</p>
                </div>
                <div className="card-body">
                    <img src={chef} alt="chef" style={{width: '5rem', height: '5rem'}}/>
                    <h5>Experienced Chef</h5>
                    <p>Here is the fast delivery service</p>
                </div>
                <div className="card-body">
                    <img src={variety} alt="variety" style={{width: '5rem', height: '5rem'}}/>
                    <h5>A variety of Dishes</h5>
                    <p>Here is the fast delivery service</p>
                </div>
            </div>

            <div className="p-4 bg-danger d-flex text-light text-center algin-item-center">
                <div className="card-body">
                    <h3>150000+</h3>
                    <h5>Deliveries Completed</h5>
                </div>
                <div className="card-body">
                    <h3>265780+</h3>
                    <h5>Peoples Trust</h5>
                </div>
                <div className="card-body">
                    <h3>1800+</h3>
                    <h5>City Locations</h5>
                </div>
                <div className="card-body">
                    <h3>458+</h3>
                    <h5>Restaurants</h5>
                </div>
            </div>

            <div className="container my-5 text-center text-dark algin-item-center">
                <h1>Our Services</h1>
                <h4>Deliveries | Fast Delivery | Before Time | Most Trusted</h4>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>

            <div className="container justify-content-center text-dark d-flex-col algin-item-center">
                <div className="d-flex">
                    <div className="my-5 mx-3 p-2 card" style={{width: '18rem'}}>
                        <img className="card-item" src={food1} alt="truk" style={{width: '16.9rem', height: '14rem', cursor: 'pointer'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning">Place Order</a>
                        </div>
                    </div>
                    <div className="my-5 mx-3 p-2 card" style={{width: '18rem'}}>
                        <img className="card-item" src={food2} alt="truk" style={{width: '16.9rem', height: '14rem', cursor: 'pointer'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning">Place Order</a>
                        </div>
                    </div>
                    <div className="my-5 mx-3 p-2 card" style={{width: '18rem'}}>
                        <img className="card-item" src={food3} alt="truk" style={{width: '16.9rem', height: '14rem', cursor: 'pointer'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning">Place Order</a>
                        </div>
                    </div>
                    <div className="my-5 mx-3 p-2 card" style={{width: '18rem'}}>
                        <img className="card-item" src={food4} alt="truk" style={{width: '16.9rem', height: '14rem', cursor: 'pointer'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning">Place Order</a>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="my-5 mx-3 p-2 card" style={{width: '18rem'}}>
                        <img className="card-item" src={food5} alt="truk" style={{width: '16.9rem', height: '14rem', cursor: 'pointer'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning">Place Order</a>
                        </div>
                    </div>
                    <div className="my-5 mx-3 p-2 card" style={{width: '18rem'}}>
                        <img className="card-item" src={food6} alt="truk" style={{width: '16.9rem', height: '14rem', cursor: 'pointer'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning">Place Order</a>
                        </div>
                    </div>
                    <div className="my-5 mx-3 p-2 card" style={{width: '18rem'}}>
                        <img className="card-item" src={food7} alt="truk" style={{width: '16.9rem', height: '14rem', cursor: 'pointer'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning">Place Order</a>
                        </div>
                    </div>
                    <div className="my-5 mx-3 p-2 card" style={{width: '18rem'}}>
                        <img className="card-item" src={food8} alt="truk" style={{width: '16.9rem', height: '14rem', cursor: 'pointer'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning">Place Order</a>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="my-5 mx-3 p-2 card" style={{width: '18rem'}}>
                        <img className="card-item" src={food9} alt="truk" style={{width: '16.9rem', height: '14rem', cursor: 'pointer'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning">Place Order</a>
                        </div>
                    </div>
                    <div className="my-5 mx-3 p-2 card" style={{width: '18rem'}}>
                        <img className="card-item" src={food10} alt="truk" style={{width: '16.9rem', height: '14rem', cursor: 'pointer'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning">Place Order</a>
                        </div>
                    </div>
                    <div className="my-5 mx-3 p-2 card" style={{width: '18rem'}}>
                        <img className="card-item" src={food11} alt="truk" style={{width: '16.9rem', height: '14rem', cursor: 'pointer'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning">Place Order</a>
                        </div>
                    </div>
                    <div className="my-5 mx-3 p-2 card" style={{width: '18rem'}}>
                        <img className="card-item" src={food12} alt="truk" style={{width: '16.9rem', height: '14rem', cursor: 'pointer'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning">Place Order</a>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="my-5 mx-3 p-2 card" style={{width: '18rem'}}>
                        <img className="card-item" src={food13} alt="truk" style={{width: '16.9rem', height: '14rem', cursor: 'pointer'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning">Place Order</a>
                        </div>
                    </div>
                    <div className="my-5 mx-3 p-2 card" style={{width: '18rem'}}>
                        <img className="card-item" src={food14} alt="truk" style={{width: '16.9rem', height: '14rem', cursor: 'pointer'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning">Place Order</a>
                        </div>
                    </div>
                    <div className="my-5 mx-3 p-2 card" style={{width: '18rem'}}>
                        <img className="card-item" src={food15} alt="truk" style={{width: '16.9rem', height: '14rem', cursor: 'pointer'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning">Place Order</a>
                        </div>
                    </div>
                    <div className="my-5 mx-3 p-2 card" style={{width: '18rem'}}>
                        <img className="card-item" src={food16} alt="truk" style={{width: '16.9rem', height: '14rem', cursor: 'pointer'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning">Place Order</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
  );
}
