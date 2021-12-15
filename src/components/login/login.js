import React from 'react';
import { loginFun } from '../../redux/thunk/thunk';
import { useDispatch, useSelector } from 'react-redux';
export default function Login (){
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const handleLogin = () => {
        dispatch(loginFun());
        
    }
    return(
        <div>
            <h2 className="heading">Login Page</h2>
            <input type="email" placeholder="Enter your email" /><br />
            <input type="password" placeholder="Enter your password" /><br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}