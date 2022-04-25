import React, { useEffect } from 'react';
import './MySkill.css';
import Aos from "aos";
import 'aos/dist/aos.css';
const MySkill = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div id='skils' className='text-center'>
            <div className="container mt-5">
                <div className="text-center">
                    <h1 className="text-light">My <span className="text-success">Skills</span></h1>
                </div>
               <div  className="row">
              <div data-aos="fade-right" className="col-md-6">
              <div className="containerial">
                    <ul>
                        <li className="main HTML text-light">HTML   <span className="text-success">100%</span></li>
                        <li className="main CSS text-light">CSS <span className="text-success">100%</span></li>
                        <li className="main HBootStrapTML text-light">BootStrap <span className="text-success">100%</span></li>
                        <li className="main JavaScript text-light">JavaScript <span className="text-success">80%</span></li>
                        <li className="main React text-light">React.Js <span className="text-success">95%</span></li>
                        
                    </ul>
                </div>
              </div>
              <div data-aos="fade-left" className="col-md-6">
              <div className="containerial">
                    <ul>
                        
                        <li className="main Firebase text-light">Firebase <span className="text-success">70%</span></li>
                        <li className="main Node text-light">Node.Js <span className="text-success">60%</span></li>
                        <li className="main MongoDB text-light">MongoDB <span className="text-success">67%</span></li>
                        <li className="main Metarial text-light">Metarial UI <span className="text-success">90%</span></li>
                        <li className="main Express text-light">Express.JS <span className="text-success">40%</span></li>
                    </ul>
                </div>
              </div>
               </div>
            </div>
        </div>
    );
};

export default MySkill;