import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Regis_protect = (props) => {
    const {Component}=props;
    const login=localStorage.getItem("login")
    const value=localStorage.getItem("email")
    const navigate=useNavigate();

    useEffect(()=>{
        if(!value){
            navigate("/register")
        }else if(login==="true"){navigate("/")}else{navigate("/login")}},[])

    return (
        <Component />
    );
};

export default Regis_protect;