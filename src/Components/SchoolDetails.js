import React from 'react';
import icon_1 from '../Static/Images/col-icon-1.png';
import icon_2 from '../Static/Images/col-icon-2.png';
import icon_3 from '../Static/Images/col-icon-3.png';

function SchoolDetails() {
  return (
    <>
      <div className="row" style={{backgroundColor: '#1b2945',color: '#ffffff',fontFamily: 'Poppins,sans-serif'}}>
        <div className="col-sm-4 col-md-4 col-lg-4" style={{margin:'35px 0 30px 0'}}>
        <img src={icon_1} />
        <p style={{fontSize: '21px',fontWeight: '700',fontStyle: 'normal',margin:'20px auto 15px auto',textTransform: 'none'}}>Vision</p>
        <p style={{fontSize: '17px',fontWeight: '300',fontStyle: 'normal',marginBottom:'20px',color: '#e6e6e6',textAlign:'left',textTransform: 'none'}}>The Vision of the School is to be the preferred Education University, which will excel in preparing educators who will be leaders in all spheres of…</p>
        <a href="#" style={{color:'#3db166',fontSize:'14px'}}>Read More</a>
        </div>

        <div className="col-sm-4 col-md-4 col-lg-4" style={{margin:'35px 0 30px 0'}}>
        <img src={icon_2} />
        <p style={{fontSize: '21px',fontWeight: '700',fontStyle: 'normal',margin:'20px auto 15px auto',textTransform: 'none'}}>Mission</p>
        <p style={{fontSize: '17px',fontWeight: '300',fontStyle: 'normal',marginBottom:'20px',color: '#e6e6e6',textAlign:'left',textTransform: 'none'}}>Our mission is to enhance the quality of teaching and learning and continuously update the methods and skills of knowledge providers…</p>
        <a href="#" style={{color:'#3db166',fontSize:'14px'}}>Read More</a>
        </div>

        <div className="col-sm-4 col-md-4 col-lg-4" style={{margin:'35px 0 30px 0'}}>
        <img src={icon_3} />
        <p style={{fontSize: '21px',fontWeight: '700',fontStyle: 'normal',margin:'20px auto 15px auto',textTransform: 'none'}}>Our History</p>
        <p style={{fontSize: '17px',fontWeight: '300',fontStyle: 'normal',marginBottom:'20px',color: '#e6e6e6',textAlign:'left',textTransform: 'none'}}>The School: meeting the global needs of the Nation’s educational system. Establishment of institutions is a…</p>
        <a href="#" style={{color:'#3db166',fontSize:'14px'}}>Read More</a>
        </div>

    </div>
    </>
  )
}

export default SchoolDetails
