import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import './detail.css'

const DetailInfo = () => {
    const {alpha3Code}= useParams();
    const [countryDetail,setCountryDetail]=useState([]);
    useEffect(() =>{
        const url=`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
        fetch(url)
        .then(response => response.json())
        .then(data =>setCountryDetail(data))
    },[])
    const {flag,name,nativeName,area,capital,population,region,subregion,timezones}=countryDetail;
    return (
        <div className="country-book">
            <h1>Country-Details</h1>
            <div className='blank'>
            </div>
            <div className="details-container">
            <div className='img'>
                <img style={{width:'500px',height:'550px',marginRight:'70px'}} src={flag} alt=""/>
            </div>
            <div>
                <h1>{name}</h1>
                <h2>Capital : {capital}</h2>
                <h2>Native Name : {nativeName}</h2>
                <h3>Population: {population}</h3>
                <h3>Area : {area}</h3>
                <h2>Region : {region}</h2>
                <h2>Subregion:{subregion} </h2>
                <h2>Time zone : {timezones}</h2>
            </div>
            </div>
        </div>
    );
};

export default DetailInfo;