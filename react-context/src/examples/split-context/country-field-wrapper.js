import React, { useContext } from 'react';
import { RenderCounter } from "../../common/components/render-counter";
import { UserLocationContext } from '../../common/user-location-context';
import { CountryField } from '../../common/components/country-field';

const availableCountries = ['Australia', "Bermuda", "Chile", "Denmark", "Estonia", "Fiji"];
let count = 0;

export const CountryFieldWrapper = () => {
    const {
        onCountryChange,
    } = useContext(UserLocationContext);
    count++;
    return (
        <div>
            <CountryField onChange={onCountryChange} selectableCountries={availableCountries} />
            <hr/>
            <RenderCounter count={count} prefix={'CountryFieldWrapper render count: '} />
            <hr/>
        </div>
    );
};