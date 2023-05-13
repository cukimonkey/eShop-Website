import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import "./Login.css";
import {auth} from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


function Login(){

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Create function for sign-in
    const signIn = e => {
        e.preventDefault();
        console.log(auth)
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigate('/'); //renders the homepage
    })
        .catch(error => alert(error.message));
};


    //Create function for registration
    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigate('/');
        })
        .catch(error => alert(error.message));
}

    return (
        <div className='login'>

            <Link to="/login" style={{textDecoration: "none"}}>
                <div className="login_logo">
                    <StorefrontIcon className='login_logoImage' fontSize='large' />
                    <h2 className='login_logoTitle'>eShop</h2>
                </div>
            </Link>

            <div className="login_container">
                <h1>Sign In</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} 
                onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} 
                onChange={e => setPassword(e.target.value)} />

                <button type='submit' className='login_signInButton' onClick={signIn}>Sign In</button>

            </form>
            <p> by signing-in you agree to the eShop website Conditions of Use & Sale. Please 
                see our Privacy Notice, our Cookies notice and our Internet-Based Ads Notice
            </p>

            <button className='login_registrationButton' onClick={register}>Create your eShop Account</button>
            </div>

        </div>
    )
}

export default Login;