import React from 'react'
import Background from '../Static/Images/Background_admission_4.jpg';
import Admission from '../Static/Images/admission_2.jpg';

function AdmissionInfo() {
  return (
    <>
    <div className="row" style={{backgroundImage: 'url(' + Background +')',backgroundSize: 'cover', backgroundPosition: 'center center',fontFamily: 'Poppins,sans-serif',margin: '2px 0 2px 0'}}>
        <div className="col-sm-4 col-md-4 col-lg-4">
        <img src={Admission} className="rounded" alt="Apply for Admission" style={{width:'480px',height:'320px'}} />
        </div>

        <div className="col-sm-4 col-md-4 col-lg-4" style={{margin:'30px 0 20px 0'}}>
        <h3 style={{fontSize:'32px',fontWeight:'700',letterSpacing: '0px',textTransform: 'none',color: '#ffffff'}}>Apply for Admission</h3>
        <p style={{fontSize:'25px',fontWeight:'500',fontStyle: 'normal',color: 'rgb(75 135 45)',marginBottom:'20px'}}>2021/2022 Application Now Open</p>
        <p style={{fontSize:'18px',textTransform:'none',color: '#c1d3ff',textAlign:'left',marginBottom:'20px'}}>We don’t just give students an education and <br/> experiences that set them up for success in a career,<br/> we help them succeed in their career to discover a <br/> field they’re passionate about and dare to lead it.</p>
        <a href="#" className="btn btn-info" style={{color: '#ffffff',fontWeight:'bold',fontSize:'16px'}}>Apply Now</a>
        </div>

        <div className="col-sm-4 col-md-4 col-lg-4" style={{margin:'30px 0 20px 0'}}>
        <h3 style={{fontSize:'32px',fontWeight:'700',letterSpacing: '0px',textTransform: 'none',color: '#ffffff'}}>Returning Student</h3>
        <p style={{fontSize:'25px',fontWeight:'500',fontStyle: 'normal',color: 'rgb(75 135 45)',marginBottom:'20px'}}>2021/2022 Academic Session</p>
        <p style={{fontSize:'18px',textTransform:'none',color: '#c1d3ff',textAlign:'left',marginBottom:'20px'}}>We don’t just give students an education and <br/> experiences that set them up for success in a career,<br/> we help them succeed in their career to discover a <br/> field they’re passionate about and dare to lead it.</p>
        <a href="#" className="btn btn-info" style={{color: '#ffffff',fontWeight:'bold',fontSize:'16px'}}>Read More</a>
        </div>

    </div>
    </>
  )
}

export default AdmissionInfo
