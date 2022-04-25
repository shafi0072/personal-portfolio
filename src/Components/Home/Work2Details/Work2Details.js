import React from 'react';

const Work2Details = (props) => {
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
            <div style={{width:'350px', height:'400px'}} className='cardead'>
                <img
                    src={img}
                    style={{
                        maxWidth: '100%',
                        height:'250px'
                    }}
                    alt=""
                    className="img-fluid"/>
                <div style={{maxWidth:'100%',  overflow:'hidden'}} className="text-center ">
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

export default Work2Details;