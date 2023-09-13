import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [VisitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);
  const handleVisitedCountry = country => {
    console.log('add this to your visited');
    // console.log(country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  const handleVisitedFlags = flag => {
    const newVisitedFlags = [...VisitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* visited country */}
      <div>
        <h5>Visited countries: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map(country => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="flag-container">
        {VisitedFlags.map(flag => (
          <img src={flag}></img>
        ))}
      </div>
      {/* dsiplay countries */}
      <div className="country-container">
        {countries.map(country => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
