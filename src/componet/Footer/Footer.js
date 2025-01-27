import React from 'react'
import '../Footer/Footer.css';
import logo from '../Assest/Header/logo.png';
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";


const Footer = () => {
  return ( 
    <Footer className='footer_section'>
        <div className='footer_container'> 
            <div className='logo'>
                <img src ={logo} alt='Logo'/>
                <span className='logo-text'>Medical</span>
                <p>Nam posuere accumsan porta. Integer<br/> id tincidunt sit amet sed libero.</p>
                <p>© Skyrev Theme 2021</p>
            </div>
            <div className='company'>
                <h3 className='footer_title'>Company</h3>
                <ul className='pointers'>
                    <li>Donec dignissim</li>
                    <li>Curabitur egestas</li>
                    <li>Nam posuere</li>
                    <li>Aenean facilisis</li>
                </ul>
            </div>
            <div className='footer_services'>
                <h3 className='Footer_title'>Services</h3>
                <ul className='pointers'>
                    <li>Cras convallis</li>
                    <li>Vestibulum faucibus</li>
                    <li>Quisque lacinia purus</li>
                    <li>Aliquam nec ex</li>
                </ul>
            </div>
            <div className='resources'>
                <h3 className='Footer_title'>Resources</h3>
                <ul className='pointers'>
                    <li>Suspendisse porttitor</li>
                    <li>Nam posuere</li>
                    <li>Curabitur egestas</li>
                </ul>
            </div>
            <div className='contact_links'>
                <div className='social_links'>
                    <FaFacebook />
                    <FaLinkedin />
                    <FaTwitterSquare />
                    <FaInstagramSquare />
                </div>
                <div className='country'>
                    <span> <TbWorld />English-EN  <RiArrowDropDownLine /></span>
                    <div className='dropdown'>
                        <p>India-IN</p>
                        <p>Europe-ER</p>
                    </div>
                </div>
            </div>
        </div>
    </Footer>
  )
}

export default Footer
