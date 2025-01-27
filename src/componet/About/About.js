import React from 'react'
import './About.css';
import photo1 from '../Assest/Hero/photo1.png';
import { MdPeopleOutline } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { IoMedkitOutline } from "react-icons/io5";

const About = () => {
  return (
    <section className='Herobanner'>
      <div className='Banner'>
        <div className='Hero_text'>
          <h1>Lorem ipsum dolor amet</h1>
          <p>Nam sollicitud nunc, cursus eros vulputate <br></br>sed. Vestibulum lobortis.</p>
          <div className='btn'>
            <a href='' className='btn more_info'>MORE INFO</a> 
            <a href='' className='btn register_now'>REGISTER NOW</a>
          </div>
        </div>  
        <div className='banner_img'>
          <img src={photo1} alt='photo'/>
        </div>
      </div>
      <div className='services'>
        <div className='features'>
          <h2>Business Solution</h2>
          <p>Interdum et malesuada fames ac ante…</p>
        </div>
        <div className='features'>
          <h2>Free project quote</h2>
          <p>Interdum et malesuada fames ac ante…</p>
        </div>
        <div className='features'>
          <h2>Nulla lobortis nunc</h2>
          <p>Interdum et malesuada fames ac ante…</p>
        </div>
      </div>
      <div className='count_section'>
        <div className='count-data'>
          <div className='count_main'>
            <div className='count_box'>
              <div className='count-icon'><MdPeopleOutline /></div>
              <div className='count_decs'>
                <p className='num'>+1200</p>
                <p className='type'>Doctors</p>
              </div>
            </div>
            <div>
              <p className='text'>Maecenas nisl libero, tincidunt id odio id,<br/>feugiat vulputate quam. </p>
            </div>
          </div>
        </div>  
        <div className='count-data'>
          <div className='count_main'>
            <div className='count_box'>
              <div className='count-icon'><IoHomeOutline /></div>
              <div className='count_decs'>
                <p className='num'>+1200</p>
                <p className='type'>Clinics</p>
              </div>
            </div>  
            <div>
              <p className='text'>Maecenas nisl libero, tincidunt id odio id,<br/>feugiat vulputate quam. </p>
            </div>
          </div>  
        </div>   
        <div className='count-data'>
          <div className='count_main'>
            <div className='count_box'>
              <div className='count-icon'><IoMedkitOutline /></div>
              <div className='count_decs'>
                <p className='num'>+100</p>
                <p className='type'>Specialist</p>
              </div>
            </div>
            <div>
              <p className='text'>Maecenas nisl libero, tincidunt id odio id,<br/>feugiat vulputate quam. </p>
            </div>
          </div>
        </div>
      </div>      
    </section>
  )
}

export default About