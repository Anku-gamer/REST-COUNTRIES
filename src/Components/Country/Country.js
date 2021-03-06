import React from 'react';
import { Link} from 'react-router-dom';

const Country = (props) => {
    const {name , population} = props.country;
    const countryStyle ={
        border : '1px solid white ',
        padding : '20px',
        margin : '20px',
        borderRadius : '20px'
    }
    return (
        <div style={countryStyle}>
            <h2>Name : {name}</h2>
            <p>population : {population}</p>
            <p><Link to = {`/country/${name}`}>Show details of {name}</Link></p>
        </div>
    );
};

export default Country;