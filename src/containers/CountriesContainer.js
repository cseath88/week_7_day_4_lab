import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import './CountriesContainer.css';
import CountryDetail from '../components/CountryDetail';
import CountrySelect from '../components/CountrySelect'

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    // useEffect has an argument of an empty array so that when we run the Country Container function and 
    // getCountries function is called it only does it once
    useEffect(() => {
      getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    // const onCountryClicked = function (country) {
    //     setSelectedCountry(country)
    // }

    const onCountrySelected = function (country) {
        setSelectedCountry(country)
    }

    return (
        <div className="main-container">
            <CountrySelect countries={countries} onCountrySelected={onCountrySelected}/>
            {/* null below means render nothing */}
            {/* and this ternary below means that if a country IS selected then use CountryDetail */}
            {selectedCountry ? <CountryDetail country={selectedCountry}/> : null}
        </div>
    )
}

export default CountryContainer;
