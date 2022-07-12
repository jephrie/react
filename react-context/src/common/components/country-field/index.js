import React from "react";
import { RenderCounter } from '../render-counter';

let count = 0;
export const CountryField = ({
    onChange,
    selectableCountries,
}) => {
    count++;

    return (
        <div>
            <p>
                Country:
                <select onChange={onChange}>
                    {selectableCountries.map((country) => <option value={country} key={country}>{country}</option>)}
                </select>
            </p>
            <RenderCounter count={count}/>
        </div>
    );
};