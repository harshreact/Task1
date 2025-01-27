/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Header.css';
import logo from '../Assest/Header/logo.png';  
import { IoIosSettings } from "react-icons/io";

const Header = () => {
  return (
    <Header className='header'>
        <div className='container'>
            <div className='Head'>
                <div className='logo'>
                    <img src ={logo} alt='Logo'/>
                    <span className='logo-text'>Medical</span>
                </div>
                <div className="main-navi">
                    <ul> 
                        <li><a href="#">Menu 1</a></li>
                        <li><a href="#">Menu 2</a></li>
                        <li><a href="#">Menu 3</a></li>
                        <li><a href="#">Menu 4</a></li>
                        <li><a href="#">Menu 5</a></li>
                    </ul>
                </div>
                <div className="authentication">
                    <a href='' className='btn white_btn'>LOGIN</a>
                    <a href='' className='btn blue_btn'>REGISTER</a>
                    <div className='line'>|</div>
                    <div className="icon"><IoIosSettings /></div>
                </div>
            </div>    
        </div>
    </Header>
    )
}

export default Header