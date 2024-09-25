import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';
import logo from './dataworks.png';

export default function Header() {
    return (
        
        <div className="header">
            <img src={logo} alt="Dataworks" height="60px" width="300px" /> 
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/courses'>Courses</Link></li>
                <li><Link to='/news'>News</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li class="login"><Link to='/login'>Login</Link></li>
            </ul>
        </div>
    );
}