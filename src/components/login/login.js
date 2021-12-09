import React from 'react';
export default function Login (){
    return(
        <div>
            <h2 className="heading">Login Page</h2>
            <input type="email" placeholder="Enter your email" /><br />
            <input type="password" placeholder="Enter your password" /><br />
            <button>Submit</button>
        </div>
    );
}