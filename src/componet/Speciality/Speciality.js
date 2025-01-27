import React from 'react'
import '../Speciality/Speciality.css';
import Specification from '../Assest/Specification/Specification.png';
const Speciality = () => {
  return (
    <section className='Speciality_section'>
         <div className='Specification'>
            <div className='Specification_content'>
                <h2 class='padded_h2'>Our Speciality</h2>
                <p>Curabitur egesta consequat lorem,vel fermentum <br/>faugue porta id.Aliquam lobortis magna neque,gravida<br/>consequat velit venenatis at.</p>
                <div className='special'>
                    <button className='special_line1'>Dentist</button>
                    <button className='special_line1'>Padriatic</button>
                    <button className='special_line1'>Cardiology</button>
                    <br/>
                    <button className='special_line2'>Traumatologi</button>
                    <button className='special_line2'>Othopaedi</button>
                    <button className='special_line2'>Anestesiologi</button>
                    <br/>
                    <button className='special_line1'>Reumatologi</button>
                    <button className='special_line1'>Andrologi</button>
                    <button className='special_line1'>Ortodonsia</button>
                </div>
            </div>
            <div className='Specification_img'>
                <img src={Specification} />
            </div>
         </div>
    </section>
  )
}

export default Speciality