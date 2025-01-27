import React from 'react'
import '../ClinicFacilities/ClinicFacilities.css';
import CFPhoto from '../Assest/ClinicFacilities/CFPhoto.png';
import card1 from '../Assest/ClinicFacilities/card1.jpeg';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const clinicfacilities = () => {
  return (
    <section className='facilities_section'>
        <div className='container'>
            <div className='facility_main'>
                <h2>Clinic Facilities</h2>
                <p>Nam sollicitudin gignissim nunc,cursus ullamcorper eros vulputate sed.</p>
            </div>
            <div className='facility_content'>
                <div className='facility_img'>
                    <img src={CFPhoto} />
                    <div className='arrow'><FaRegArrowAltCircleLeft />   <FaRegArrowAltCircleRight /></div>
                </div>
                <div className='facility_cards'>
                    <div className='card'>
                        <img src={card1}/>
                        <div className='card_desc'>
                            <h2>Lorem ipsum dolor</h2>
                            <p>Pellentesque ac bibendum<br/>tortor,vel blandit nulla,Nulla<br/>eget lobortis lacus.</p>
                            <a href="#" className="see_all">See Detail</a> 
                        </div>
                    </div>
                    <div className='card'>
                        <img src={card1}/>
                        <div className='card_desc'>
                            <h2>Lorem  ipsum dolor</h2>
                            <p>Pellentesque ac bibendum<br/>tortor,vel blandit nulla,Nulla<br/>eget lobortis lacus.</p>
                            <a href="#" className="see_all">See Detail</a>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={card1}/>
                        <div className='card_desc'>
                            <h2>Lorem ipsum dolor</h2>
                            <p>Pellentesque ac bibendum<br/>tortor,vel blandit nulla,Nulla<br/>eget lobortis lacus.</p>
                            <a href="#" className="see_all">See Detail</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default clinicfacilities