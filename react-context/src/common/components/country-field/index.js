import React, { useContext } from 'react';
import { UserLocationContext } from '../../user-location-context';

export const availableCountries = ['Australia', "Bermuda", "Chile", "Denmark", "Estonia", "Fiji"];

export const CountryField = ({
    onChange,
    selectableCountries = availableCountries,
    value,
}) => {
    return (
        <div>
            <p>
                Country:
                <select onChange={() => onChange(event.target.value)} value={value}>
                    {selectableCountries.map((country) => <option value={country} key={country}>{country}</option>)}
                </select>
            </p>
        </div>
    );
};

export const CountryFieldNoValue = ({
    onChange,
    selectableCountries = availableCountries,
}) => {
    return (
        <div>
            <p>
                Country:
                <select onChange={() => onChange(event.target.value)}>
                    {selectableCountries.map((country) => <option value={country} key={country}>{country}</option>)}
                </select>
            </p>
        </div>
    );
};

export const CountryFieldWrapper = () => {
    const {
        onCountryChange,
    } = useContext(UserLocationContext);

    return <CountryField onChange={() => onCountryChange(event.target.value)} selectableCountries={availableCountries} />;
};