import React from 'react';
import './ListItem.css';

const ListItem = ({country, onCountrySelected}) => {

const handleSelect = function() {
  console.log(`Clicked on ${country.name.common}`)
  onCountrySelected(country)
}

  return <option value={country.cca2}>{country.name.common}{country.flag}</option>
}

export default ListItem;