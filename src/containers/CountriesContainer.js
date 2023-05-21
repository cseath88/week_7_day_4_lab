import React, { useState, useEffect } from 'react';
import './CountriesContainer.css';
import CountryDetail from '../components/CountryDetail';
import CountrySelect from '../components/CountrySelect'

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);


    useEffect(() => {
        getCountries();
    }, [])


    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }


    const onCountrySelected = function (country) {
        setSelectedCountry(country)
    }


    const totalPopulation = function (countries) {
        const total = countries.reduce((runningTotal, country) => {
            return runningTotal + country.population
        }, 0)
        console.log(total)
        return total
        
    }


    return (
        <div className="main-container">
            <CountrySelect countries={countries} onCountrySelected={onCountrySelected} totalPopulation={totalPopulation}/>
            {selectedCountry ? <CountryDetail country={selectedCountry}/> : null}
        </div>
    )
}


export default CountryContainer;
