import React from 'react'
import '../Clinics/Clinics.css';
import clinic from '../Assest/Clinic/clinic.jpg';
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Clinics = () => {
  return (
    <section class="clinic-section">
        <div class="clinic">
            <h2>Our Clinics</h2>
            <p>Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.</p>
            <div class="clinic-grid">
                <div class="clinic-card">
                    <div className='clinic_img'><img src={clinic} alt="Clinic Image"/></div>
                    <div className='clinic_des'>
                        <h2>Head Quarter</h2>
                        <p><span><IoCall /></span> +123 456 78 91</p>
                        <p><span><MdOutlineMail /></span> hello@luxi.com</p>
                        <p><span><FaLocationDot /></span> Lorem ipsum street no 14 Block A</p>
                        <button>Contact</button>
                    </div>    
                </div>
                <div class="clinic-card">
                    <div className='clinic_img'><img src={clinic} alt="Clinic Image"/></div>
                    <div className='clinic_des'>
                        <h2>Head Quarter</h2>
                        <p><span><IoCall /></span> +123 456 78 91</p>
                        <p><span><MdOutlineMail /></span> hello@luxi.com</p>
                        <p><span><FaLocationDot /></span> Lorem ipsum street no 14 Block A</p>
                        <button>Contact</button>
                    </div>    
                </div>
                <div class="clinic-card">
                    <div className='clinic_img'><img src={clinic} alt="Clinic Image"/></div>
                    <div className='clinic_des'>
                        <h2>Head Quarter</h2>
                        <p><span><IoCall /></span> +123 456 78 91</p>
                        <p><span><MdOutlineMail /></span> hello@luxi.com</p>
                        <p><span><FaLocationDot /></span> Lorem ipsum street no 14 Block A</p>
                        <button>Contact</button>
                    </div>    
                </div>
                <div class="clinic-card">
                    <div className='clinic_img'><img src={clinic} alt="Clinic Image"/></div>
                    <div className='clinic_des'>
                        <h2>Head Quarter</h2>
                        <p><span><IoCall /></span> +123 456 78 91</p>
                        <p><span><MdOutlineMail /></span> hello@luxi.com</p>
                        <p><span><FaLocationDot /></span> Lorem ipsum street no 14 Block A</p>
                        <button>Contact</button>
                    </div>    
                </div>
                <div class="clinic-card">
                    <div className='clinic_img'><img src={clinic} alt="Clinic Image"/></div>
                    <div className='clinic_des'>
                        <h2>Head Quarter</h2>
                        <p><span><IoCall /></span> +123 456 78 91</p>
                        <p><span><MdOutlineMail /></span> hello@luxi.com</p>
                        <p><span><FaLocationDot /></span> Lorem ipsum street no 14 Block A</p>
                        <button>Contact</button>
                    </div>    
                </div>
                <div class="clinic-card">
                    <div className='clinic_img'><img src={clinic} alt="Clinic Image"/></div>
                    <div className='clinic_des'>
                        <h2>Head Quarter</h2>
                        <p><span><IoCall /></span> +123 456 78 91</p>
                        <p><span><MdOutlineMail /></span> hello@luxi.com</p>
                        <p><span><FaLocationDot /></span> Lorem ipsum street no 14 Block A</p>
                        <button>Contact</button>
                    </div>    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Clinics
