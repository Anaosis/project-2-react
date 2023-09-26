import React from 'react';
import {Link} from 'react-router-dom';
import './HomeCategory.css';

const HomeCategory = (props) => {
    const {route, name, description, image} = props;

    return(
        <div className="col-12 col-md-6 mb-3">
            <Link to={`/category/${route}`}>
                <div className="card w-100 my-4">
                    <img className="card-img-top w-100" src={image} alt={name}/>
                    <div className="card-body">
                        <h2 className="h4 my-1"><strong>{name}:</strong></h2>
                        <p className="m-0">{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default HomeCategory;