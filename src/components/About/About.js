import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import IMG from "../img-vdo/1.svg";
import Header from "../Header"
import "./About.css"

const About = () => {
    const navigate=useNavigate();
    function more(){
        const email=localStorage.getItem("email");
        if(email){
          navigate("/transaction")
        }else{
          navigate("/register")
        }
      }
    return (
        <>
        <Header/>
        <div className='about'>
        <div className='container'>
            <div className='row align-items-center pt-5 pb-5'>
                <div className='text col-lg-6 col-md-6 col-12'>
                    <h6>PRIMIMUM BANK</h6>
                    <h2>UNlimited Transaction with zero fees</h2>
                    <button className='btn but' onClick={more}>Get started</button>
                </div>
                <div className='img col-lg-6 col-md-6 col-12 pt-5 pb-5'>
                    <img className="img-fluid" src={IMG}></img>
                </div>
            </div>
            
        </div>
        </div>
        </>
    );
};

export default About;