import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry, handleVisitedFlags }) => {
    // console.log(country);
    const {name, flags, population, area} = country;
    
    const [visited, setVisited]= useState(false);
    
    const handleVisited = () =>{
        // setVisited(true);
        setVisited(!visited);
    }

    // const passWithParams = () => handleVisitedCountry(country);

    // console.log(handleVisitedCountry);

    return (
        <div className={`country ${visited && 'visited'}`}>
        {/* <div className={`country ${visited ? 'visited' : 'non-visited'}`}> */}
            <h2 style={{color: visited? 'purple' : 'white'}}>{name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
           <div className='btn'>
           <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
           <button onClick={() => handleVisitedFlags(country)}>Mark Flag</button>
            {/* <button onClick={handleVisited}>Visited</button> */}
            <button onClick={handleVisited}> {visited ? 'Visited':'Going'}</button>
            {/* {visited && 'I have Visited this Country.'} */}
            {visited ? 'I have Visited this Country.' : 'I want to visite this country'}
           </div>
        </div>
    );
};

export default Country;