import React, {useState} from 'react';
import SliderImage from '../Components/SliderImage';
import StudentLogin from '../Components/StudentLogin';
import AdmissionInfo from '../Components/AdmissionInfo';
import SchoolDetails from '../Components/SchoolDetails';
import '.././App.css';

function Home() {
  return (
    <>
    <div className="row">
      <SliderImage />
      <StudentLogin />
    </div>
    <AdmissionInfo />
    <SchoolDetails />
  </>
  );
}

export default Home;
