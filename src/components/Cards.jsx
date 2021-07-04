import React from 'react';
import web from '../images/img4.jpg';

const Cards = (props) => {
    return(
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img className="card-img-top" src={props.cardImg} alt="Card image cap" height="200" width="500"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.cardTitle}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;