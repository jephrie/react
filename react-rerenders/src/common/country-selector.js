
export const availableCountries = ['Australia', "Bermuda", "Chile", "Denmark", "Estonia", "Fiji"];

export const CountrySelector = ({
    countries = availableCountries,
    onChange = () => {},
    value = countries[0]
}) => {
    return (
        <select onChange={(e) => onChange(e.target.value)} value={value}>
            {countries.map((country) => <option value={country} key={country}>{country}</option>)}
        </select>
    );
};