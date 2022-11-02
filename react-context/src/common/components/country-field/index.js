import React from "react";

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