import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const {name} = useParams();
    const [country , setCountry] = useState([]);
    useEffect (() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch (url)
        .then(res => res.json())
        .then (data => setCountry(data[0]));
    })
    return (
        <div>
            <h3>This is country detail : {name}</h3>
            <p>Capital: {country.capital}</p>
            <p>Region : {country.region}</p>
            <p>sub region : {country.subregion}</p>
            <p>Area : {country.area}</p>

        </div>
    );
};

export default CountryDetail;