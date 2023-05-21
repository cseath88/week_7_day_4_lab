const CountrySelect = ({countries, onCountrySelected}) => {

    
    const countryItems = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name.common}</option>
        
    })


    const handleChange = (event) => {
        const index = event.target.value
        const country = countries[index]
        onCountrySelected(country)
    }


    return (
        
        <select onChange={handleChange}>
            {countryItems}
        </select>
        
    )
}


export default CountrySelect