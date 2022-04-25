import React from 'react';

const Message = () => {
    return (
        <div className='mb-5' style={{background:'black'}}>
            <div id="contract" className="container">
                <div className="text-center">
                    <h1 className="text-light">Ask your
                        <span className="text-success">Questions</span>
                    </h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label className="text-light" htmlFor="">Your Email</label>
                        <input type="text" className="form-control" placeholder="Email"/>
                        <br/>
                        <label className="text-light" htmlFor="" placeholder="Name">Your Name</label>
                        <input type="text" className="form-control" placeholder='name'/>
                    </div>
                    <div className="col-md-6">
                        <label for="exampleFormControlTextarea1" className="text-light">Your Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                        <button className="btn btn-success mt-2" style={{width:'100%'}}>Send US</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;