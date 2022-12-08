import React, { useState, useMemo } from 'react';
import { availableCountries, CountrySelector } from '../../common/country-selector';

export const MemoComponents = () => {
    const [selectedCountry, setAvailableCountry] = useState(availableCountries[0]);
    const [markedCountry, setMarkedCountry] = useState(availableCountries[1]);
    
    const list = useMemo(() => {
        return (
        <CountriesList
            countries={availableCountries}
            markedCountry={markedCountry}
        />
        );
    }, [markedCountry]);
    
    const selected = useMemo(() => {
        return (
        <SelectedCountry
            country={selectedCountry}
        />
        );
    }, [selectedCountry]);

    // const list = 
    //     <CountriesList
    //         countries={availableCountries}
    //         markedCountry={markedCountry}
    //     />;
    
    // const selected = 
    //     <SelectedCountry
    //         country={selectedCountry}
    //     />;
    
    return (
        <>
            <h1>Memoize child components</h1>
            <p>This page keeps state for selected and marked country.</p>
            <p>If either of them changes, this page and it's children will re-render, unless you memoize the values and add the correct dependencies.</p>
            <div>
                Marked country:
                <CountrySelector onChange={setMarkedCountry} value={markedCountry} />
            </div>
            <div>
                Selected country:
                <CountrySelector onChange={setAvailableCountry} value={selectedCountry} />
            </div>
            {list}
            {selected}      
        </>
    );
};

const CountriesList = ({ countries, markedCountry }) => {
    return (
        <ul>
            {countries.map((country) => <li>{country}{country === markedCountry ? '*' : null}</li>)}
        </ul>
    );
};

const SelectedCountry = ({ country }) => {
    return (
        <div>You've selected {country}</div>
    );
};