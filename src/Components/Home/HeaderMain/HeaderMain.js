import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

import './HeaderMain.css';
import Aos from "aos";
import 'aos/dist/aos.css';


const HeaderMain = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div className='background'>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mt-5">

                            <div data-aos="fade-left">
                            <h1
                                className='text-light'
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: '90px'
                                }}>
                                <span className='text-success'>I'm</span>
                            </h1>

                            <h1
                                className='text-light'
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: '40px',
                                    fontFamily: "'Sansita Swashed', cursive"
                                }}>
                                Md Abdullah AL Shafi</h1>

                            </div>
                            <p data-aos="fade-right" className='text-light mt-5'>
                                Expert in developing Single Page Application(SPA) using React and Node.js. I've
                                a good knowledge in JavaScript, ES6, BootStrap-4 and also comfortable with
                                Material UI, Express.js and MongoDB.
                                <br/><br/>
                                Client satisfaction is my priority. Love to develop modern and impressive
                                websites for my clients and always responsible for the job.
                            </p>
                             <a  href="https://drive.google.com/file/d/1FCip1AVBn3wow8-7DX4nJoC9a4k9vXcK/view?usp=sharing"><button data-aos="fade-left" className="btn btn-success">Download Resume</button></a>   
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeaderMain;