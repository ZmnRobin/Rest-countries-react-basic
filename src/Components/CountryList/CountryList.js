import React from 'react';
import { Link } from 'react-router-dom';
import './countrylist.css';

const CountryList = (props) => {
    const {name,flag,alpha3Code}=props.country;
    return (
        <div className='country'>
            <img src={flag} alt=""/>
            <h2>{name}</h2>
            <Link to={`/DetailInfo/${alpha3Code}`}>
            <button className='btn'>Detail Info</button>
            </Link>
        </div>
    );
};
export default CountryList;