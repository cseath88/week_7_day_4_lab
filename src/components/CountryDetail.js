// import './CountryDetail.css';

const CountryDetail = ({country}) => {


    return (
        <>
        <div className="country-detail">
            The capital of {country.name.common} is {country.capital}
        </div>
        <div>
        <img src={country.flags.png} alt="pic of flag"></img>
        </div>
        </>
    )
}

export default CountryDetail;


