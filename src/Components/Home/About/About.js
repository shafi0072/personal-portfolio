import React, {useEffect} from 'react';
import profilePic from '../../../image/58684821_629868140759994_2529567555014623232_o.jpg';
import profilePic2 from '../../../image/117591301_1083951432008273_6370280282805424557_n.jpg';
import profilePic3 from '../../../image/120818307_1008138336266304_6741855814598396019_o.jpg';
import './About.css';
import Aos from "aos";
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div id="about" className='backAbout'>
            <div className="text-center mb-5">
                <h1 className='text-light'>About
                    <span className='text-success'>Me</span>
                </h1>
            </div>
            <div className="container mt-5">
                <div data-aos="fade-down" className="row">
                    <div data-aos="fade-right" className="col-md-4">
                        <img src={profilePic} alt="" className="img-fluid proflieImage"/>
                    </div>
                    <div data-aos="fade-down" className="col-md-4">
                        <img src={profilePic2} alt="" className="img-fluid proflieImage"/>
                    </div>
                    <div data-aos="fade-left" className="col-md-4">
                        <img src={profilePic3} alt="" className="img-fluid proflieImage"/>
                    </div>
                </div>
            </div>
           <div className="container">
           <div className="row">
                <div data-aos="fade-right" className="col-md-6">
                    <p className='text-light mt-5'>I am MD Abdullah Al Shafi. I am Front End Developer. Proficient in modern website design. I specialize in pixel-perfect responsive design with HTML5, CSS3, Flexbox, Bootstrap, ES6, JavaScript. I also have solid knowledge working with React.js and server-side node.js, express.js, MongoDB.
also work with web3.0 NFT
                    </p>
                </div>
                <div data-aos="fade-left" className="col-md-6">
                    <div className=" mt-5">
                    <h1 className='text-light text-center'>Contract <span className='text-success'>Info</span></h1>
                    <ul style={{listStyle:'none', marginLeft: '21%'}}>
                        <li  className="text-light">Phone: +8801727768266</li>
                        <li className="text-light"><a style={{textDecoration:'none'}} className='text-light' target="_blank" href="http://www.facebook.com/tanjibsarwor.abdulla/">Facebook: <span className='text-primary font-weight-bolder'>Just Click Here</span></a></li>
                        <li className="text-light"><a style={{textDecoration:'none'}} className='text-light' target="_blank" href="http://www.linkedin.com/in/md-abdullah-al-safi-659734170/">LinkedIn: <span className='text-primary font-weight-bolder'>Go And See</span></a></li>
                        <li className="text-light"><a style={{textDecoration:'none'}} className='text-light' target="_blank" href="http://safi29317@gmail.com">Email: <span className='text-success font-weight-bolder'>safi29317@gmail.com</span></a></li>
                    </ul>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default About;