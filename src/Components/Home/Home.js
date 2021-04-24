import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CountryList from '../CountryList/CountryList';
import './home.css'

const Home = () => {
    const [countries,setCountries]=useState([])
    useEffect(() =>{
        const url='https://restcountries.eu/rest/v2/all'
        fetch(url)
        .then(response =>response.json())
        .then(data =>setCountries(data))
    },[])
    return (
        <div className="country-book">
        <h1>Country-Book</h1>
        <div className="blank">

        </div>
        <div className='country-list'>
            {
                countries.map(country => <CountryList country={country}></CountryList>)
            }
        </div>
        </div>
    );
};

export default Home;