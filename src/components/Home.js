import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header"
import Vdeo from "./img-vdo/1.mp4"
import "./Home.css"
import { useNavigate } from "react-router-dom";

function Home() {
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
      <Header />

      <div className="home">
        <video loop autoPlay muted>
          <source className='embed-responsive' src={Vdeo} type="video/mp4" />
        </video>
        <div className="font">
          <h3 className='text-light display-4 font-weight-bold'>Virtual Banking Made Easy</h3>
          <p className='text-light'>good bank work life eary jdfh jsks fhfhhf sjsksks dfhdffdfj jfee</p>
          <button className='btn but' onClick={more}>Get started</button>
        </div>
      </div>
    </>
  );
}

export default Home;