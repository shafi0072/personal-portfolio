import React from 'react';
import './Work1Details.css'
const Work1Details = (props) => {
    const {
        name,
        img,
        id,
        Links,
        Github,
        Technology
    } = props.data;
    return (
        <div className="col-md-4">
            <div style={{width:'350px', overflow:'hidden'}} className='cardead'>
                <img
                    src={img}
                    style={{
                        maxWidth: '100%'
                    }}
                    alt=""
                    className="img-fluid"/>
                <div style={{maxWidth:'100%'}} className="text-center ">
                    <h3 className="text-light">{name}</h3>
                    <small className="text-light text-left pr-5">{Technology}</small>
                    <div className="row mt-3">
                        <div className="col-md-6">
                        <a target="_blank" href={Links}><button className="btn btn-primary">Live Server</button></a>
                        
                        </div>
                        <div className="col-md-6">
                        <a target="_blank" href={Github}><button className="btn btn-success pl-4 pr-4">GitHub</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work1Details;