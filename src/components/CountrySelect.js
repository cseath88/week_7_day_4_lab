import ListItem from "./ListItem"



const CountrySelect = ({countries, onCountrySelected }) => {

    const countryItems = countries.map((country, index) => {
        return <ListItem country={country} key={index} onCountrySelected={onCountrySelected} />
    })

    const handleChange = (event) => {
        console.log(event.target.value);
    }
    

    return (
        <div>
        <ul>
            <select onChange={handleChange} >
                
                {countryItems}
            </select>

        </ul>
        </div>


    )
}

export default CountrySelect


{/* <select
value={selectedFruit} // ...force the select's value to match the state variable...
onChange={e => setSelectedFruit(e.target.value)} // ... and update the state variable on any change!
> */}