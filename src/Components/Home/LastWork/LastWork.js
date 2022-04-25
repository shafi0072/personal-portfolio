import React, { useEffect } from 'react';
import '../About/About.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import redOnion from '../../../image/Wokrs/Red-Onion.png';
import AmazonClone from '../../../image/Wokrs/Amazon-clone.png';
import doctorsPoratal from  '../../../image/Wokrs/Doctors-portal.png';
import './LastWork.css'
import Work1Details from '../Work1Details/Work1Details';
import hotGadget from '../../../image/Wokrs/hot-gadget.png';
import leaderBoard from '../../../image/Wokrs/leader-board.png';
import TravelGuru from '../../../image/Wokrs/Travel-guru.png';
import Work2Details from '../Work2Details/Work2Details';
import NetFlix from '../../../image/Wokrs/NetFlic.png'
const LastWork = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    const WorkDetails1 = [
        {
            id:1,
            name:'Red Onion',
            Technology:'HTML,CSS,Bootstrap,React.JS,Firebase,Node.Js,Express.js,MongoDB',
            img:redOnion,
            Links:'https://red-onion-70f39.web.app/',
            Github:'https://github.com/shafidark/red-onio'
        },
        {
            id:2,
            name:'Amazon-Clone',
            Technology:'HTML,CSS,Bootstrap,React.JS,Firebase',
            img:AmazonClone,
            Links:'https://clone-84560.web.app/',
            Github:'https://github.com/shafidark/Amazon-clone'
        },
        {
            id:3,
            name:'Doctors-Portal',
            Technology:'HTML,CSS,Bootstrap,React.JS,Firebase,Node.Js,Express.js,MongoDB',
            Github:'https://github.com/shafidark/Doctors-portal',
            img:doctorsPoratal,
            Links:'https://doctors-clone.web.app/'
        }
    ] ;
    const WorkDetails2 = [
        {
            id:1,
            name:'Travel-Guru',
            Technology:'HTML,CSS,Bootstrap,React.JS,Firebase',
            Github:'https://github.com/shafidark/Travel-Guru',
            img:TravelGuru,
            Links:'https://travel-guruji-33f46.web.app/'
        },
        {
            id:2,
            name:'Hot-Gadget',
            Technology:'HTML, CSS, Bootstrap',
            Github:'https://github.com/shafidark/hot-gadget',
            img:hotGadget,
            Links:'https://shafidark.github.io/hot-gadget/'
        },
        {
            id:3,
            name:'NETFLIX-clone',
            Technology:'ReactJS, ReactHooks, Axios, Firebase',
            Links:'https://netflix-clone-9d7a6.web.app/',
            Github:'https://github.com/shafidark/netflix-clone',
            img:NetFlix
        }
    ];
    return (
        <div id="work" className="backWork">
            <div className="text-center mt-5">
                <div className="mb-5">
                <h1 className='text-light'>Last
                    <span className='text-success'>Works</span>
                </h1>
                </div>
                <div className="container pb-5">
                <div data-aos="fade-right" className="row">
                    {
                        WorkDetails1.map(data => <Work1Details  data={data}/>)
                    }
                </div>
                <div data-aos="fade-left" className="row mt-5">
                    {
                        WorkDetails2.map(data => <Work2Details data={data}/>)
                    }
                </div>
                </div>
                </div>
        </div>
    );
};

export default LastWork;