import React from 'react';
import { Link } from "react-router-dom";
export default function Signup (){
    return(
        <div>
            <h2 className="heading">Register Page</h2>
            <input type="email" placeholder="Enter your email" /><br />
            <input type="password" placeholder="Enter your password" /><br />
            <Link to="/login"><button>Submit</button></Link>
        </div>
    );
}