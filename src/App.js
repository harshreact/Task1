import logo from './logo.svg';
import './App.css';
import Header from '../src/componet/header/Header';
import About from '../src/componet/About/About';
import Appointment from '../src/componet/Appointment/Appointment';
import AskDoctor from '../src/componet/AskDoctor/AskDoctor';
import ClinicFacilities from '../src/componet/ClinicFacilities/ClinicFacilities';
import Clinics from '../src/componet/Clinics/Clinics';
import Footer from '../src/componet/Footer/Footer';
import Speciality from '../src/componet/Speciality/Speciality';

function App() {
  return (
    <><Header /><About /><Appointment /><AskDoctor /><ClinicFacilities /><Clinics /><Footer /><Speciality /></>
  );
}

export default App;
