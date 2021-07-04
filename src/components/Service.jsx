import React from 'react';
import Cards from './Cards';
import Services_data from './Services_data';

const Service = () => {
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-3">
                            {
                                Services_data.map((value, index) => {
                                    return (
                                        <Cards key={index} cardTitle={value.title} cardImg={value.image}/>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;