import React, { useContext } from 'react';
import { UserLocationContext } from '../../user-location-context';

const availableCountries = ['Australia', "Bermuda", "Chile", "Denmark", "Estonia", "Fiji"];

export const CountryField = ({
    onChange,
    selectableCountries,
}) => {
    return (
        <div>
            <p>
                Country:
                <select onChange={onChange}>
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

    return <CountryField onChange={onCountryChange} selectableCountries={availableCountries} />;
};