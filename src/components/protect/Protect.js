import React,{ useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const Protect = (props) => {
    const data=localStorage.getItem("email")
    const navigate=useNavigate();
    useEffect(()=>{
    if(!data){
        navigate("/register")
    }
})
    const {Component}=props
    return (
       <Component />
    );
};

export default Protect;