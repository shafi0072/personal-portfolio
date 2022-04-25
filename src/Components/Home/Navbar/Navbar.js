import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light smooth" >
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a className="nav-link" href="#about" style={{color:'white'}}>About Me
                                <span class="sr-only" >(current)</span>
                            </a>
                        </li>
                        <li class="nav-item" >
                            <a class="nav-link " href="#work" style={{color:'white'}}>My Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#skils" style={{color:'white'}}>My Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contract" style={{color:'white'}}>Contract</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;