import React from 'react';
import Header from "../Header"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Transaction.css"

const Transaction = () => {
    return (
        <div>
            <Header />
           <h1 className='div-h text-center mt-5'>doing your transaction</h1> 
        </div>
    );
};

export default Transaction;