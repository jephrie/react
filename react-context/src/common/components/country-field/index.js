import React from "react";
import { incrementRenderCount } from '../../../service/render-tracker';

export const CountryField = ({
    onChange,
    selectableCountries,
}) => {
    incrementRenderCount('CountryField');

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