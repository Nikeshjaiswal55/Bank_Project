import React from 'react';
import IMG from "../img-vdo/2.png"
import { Link } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from "../Header"
import "./Discover.css"
const Discovery = () => {
    return (
        <div>
            <>
                <Header />
                <div className='discovery py-5'>
                    <div className='row align-items-center container mx-auto my-5'>
                        <div className='img col-lg-6 col-md-6 col-12 pt-5 pb-5'>
                            <img className="img-fluid" src={IMG}></img>

                        </div>
                        <div className='text col-lg-6 col-md-6 col-12'>
                            <h6>UNlimited ACCESS</h6>
                            <h2>REGISTER/LOGIN Your account at any time </h2>
                            <Link to="#">Learn More</Link>
                            <div>
                                <Link to="/login"><button className='btn bg-primary text-light'>login</button></Link>
                                <Link to="/register"><button className='btn bg-primary text-light m-2'>Register</button></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        </div>
    );
};

export default Discovery;