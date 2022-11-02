import React, { useContext } from 'react';
import { UserLocationContext } from '../../common/user-location-context';
import { CountryField } from '../../common/components/country-field';

const availableCountries = ['Australia', "Bermuda", "Chile", "Denmark", "Estonia", "Fiji"];

export const CountryFieldWrapper = () => {
    const {
        onCountryChange,
    } = useContext(UserLocationContext);

    return (
        <div>
            <CountryField onChange={onCountryChange} selectableCountries={availableCountries} />
        </div>
    );
};