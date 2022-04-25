import React from 'react';
import About from '../About/About';
import HeaderMain from '../HeaderMain/HeaderMain';
import LastWork from '../LastWork/LastWork';
import Message from '../Message/Message';
import MySkill from '../MySkill/MySkill';

import Navbar from '../Navbar/Navbar';
import'./Home.css';

const Home = () => {
    return (
        <div className='backing'>
            <HeaderMain/>
            <div className="mt-5">
            <div className="mt-5">
            <About/>
            </div>
            <div >
             <LastWork/>
            </div>
            <div>
                <MySkill/>
            </div>
            <div>
                <Message/>
            </div>
            </div>
        </div>
    );
};

export default Home;