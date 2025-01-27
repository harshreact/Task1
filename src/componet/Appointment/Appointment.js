import React from 'react'
import '../Appointment/Appointment.css'

const Appointment = () => {
  return (
    <section className='Appointment'>
        <div className='Book_appointment'>
            <div className='Appointment_content'>
                <h3>Ready to get started ?</h3>
                <p>Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.</p>
            </div>
            <div className='Abtn'>
                <a href="" className='Appointment_btn'>CREATE APPOINTMENT NOW</a>
            </div>
        </div>
    </section>
  )
}

export default Appointment