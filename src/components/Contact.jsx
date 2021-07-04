import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        full_name:'',
        email_address:'',
        mobile_number:'',
        message:'',
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;

        setData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        });
    }

    const FormSubmit = (event) => {
        event.preventDefault();
        alert(`               Full Name: ${data.full_name}
               Email Address: ${data.email_address}
               Phone Number: ${data.mobile_number}
               Message: ${data.message}`);
        setData({});
    }
    return(
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us </h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={FormSubmit}>
                            <div className="mb-3">
                                <label> Full Name: </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter your name"
                                value={data.full_name}
                                onChange={InputEvent}
                                name="full_name"/>
                            </div>
                            <div className="mb-3">
                                <label> Email Address: </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter your email address"
                                value={data.email_address}
                                onChange={InputEvent}
                                name="email_address"/>
                            </div>
                            <div className="mb-3">
                                <label> Phone number: </label>
                                <input 
                                type="number" 
                                className="form-control" 
                                value={data.mobile_number}
                                onChange={InputEvent}
                                placeholder="Enter your mobile number"
                                name="mobile_number"/>
                            </div>
                            <div className="mb-3">
                                <label> Message: </label>
                                <textarea
                                className="form-control" 
                                placeholder="Your Feedback"
                                value={data.message}
                                onChange={InputEvent}
                                name="message"></textarea>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-outline-primary">Submit</button>
                            </div>
                        </form>    
                    </div>                    
                </div>
            </div>
        </>
    )
}

export default Contact;