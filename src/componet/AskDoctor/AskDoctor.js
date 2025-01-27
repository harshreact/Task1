import React from 'react'
import '../AskDoctor/AskDoctor.css'
import flower from '../Assest/Ask_Doctor/ASKDoc.png';
import doctor from '../Assest/Ask_Doctor/doctor.jpg';
import { FaThumbsUp } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";

const AskDoctor = () => {
  return (
    <section className='AskDoctor'>
        <div className='AskDoctor_sidebar'>
            <h2>Ask Doctors</h2>
            <ul className='list'> 
                <li><a href='' className='active'>All</a></li>
                <li><a href=''>Orthopedic</a></li>
                <li><a href=''>Nutritionist</a></li>
                <li><a href=''>Pediatric</a></li>
                <li><a href=''>Anaesthestic</a></li>
            </ul>
        </div>
        <div className='Doctor_list'>
            <div class="Doctor_card">
                <div className='Doctor_img'>
                    <img src={doctor} alt="Doctor_name" />
                </div>
                <div class="Doctor_info">
                    <h3>Dr. Jena Doe</h3>
                    <p>Pediatric Surgeon</p>
                    <div class="details">
                        <span><FaThumbsUp /> 95%</span>
                        <span> <GiSuitcase /> 4 Years</span>
                    </div>
                    <div className='chat_btn'>
                        <a href='#'>CHAT</a>
                    </div>
                </div>
            </div>
            <div class="Doctor_card">
                <div className='Doctor_img'>
                    <img src={doctor} alt="Doctor_name" />
                </div>
                <div class="Doctor_info">
                    <h3>Dr. Jena Doe</h3>
                    <p>Pediatric Surgeon</p>
                    <div class="details">
                        <span><FaThumbsUp /> 95%</span>
                        <span> <GiSuitcase /> 4 Years</span>
                    </div>
                    <div className='chat_btn'>
                        <a href='#'>CHAT</a>
                    </div>
                </div>
            </div><div class="Doctor_card">
                <div className='Doctor_img'>
                    <img src={doctor} alt="Doctor_name" />
                </div>
                <div class="Doctor_info">
                    <h3>Dr. Jena Doe</h3>
                    <p>Pediatric Surgeon</p>
                    <div class="details">
                        <span><FaThumbsUp /> 95%</span>
                        <span> <GiSuitcase /> 4 Years</span>
                    </div>
                    <div className='chat_btn'>
                        <a href='#'>CHAT</a>
                    </div>
                </div>
            </div><div class="Doctor_card">
                <div className='Doctor_img'>
                    <img src={doctor} alt="Doctor_name" />
                </div>
                <div class="Doctor_info">
                    <h3>Dr. Jena Doe</h3>
                    <p>Pediatric Surgeon</p>
                    <div class="details">
                        <span><FaThumbsUp /> 95%</span>
                        <span> <GiSuitcase /> 4 Years</span>
                    </div>
                    <div className='chat_btn'>
                        <a href='#'>CHAT</a>
                    </div>
                </div>
            </div><div class="Doctor_card">
                <div className='Doctor_img'>
                    <img src={doctor} alt="Doctor_name" />
                </div>
                <div class="Doctor_info">
                    <h3>Dr. Jena Doe</h3>
                    <p>Pediatric Surgeon</p>
                    <div class="details">
                        <span><FaThumbsUp /> 95%</span>
                        <span> <GiSuitcase /> 4 Years</span>
                    </div>
                    <div className='chat_btn'>
                        <a href='#'>CHAT</a>
                    </div>
                </div>
            </div><div class="Doctor_card">
                <div className='Doctor_img'>
                    <img src={doctor} alt="Doctor_name" />
                </div>
                <div class="Doctor_info">
                    <h3>Dr. Jena Doe</h3>
                    <p>Pediatric Surgeon</p>
                    <div class="details">
                        <span><FaThumbsUp /> 95%</span>
                        <span> <GiSuitcase /> 4 Years</span>
                    </div>
                    <div className='chat_btn'>
                        <a href='#'>CHAT</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AskDoctor