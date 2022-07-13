import React, { useState } from 'react';
import { WelcomeMessage } from '../../common/components/welcome-message';
import { InfoPanel } from '../../common/components/info-panel';
import { NameField } from '../../common/components/name-field';
import { CountryField } from '../../common/components/country-field';
import { Disclaimer } from '../../common/components/disclaimer';
import { RenderCounter } from '../../common/components/render-counter';

let count = 0;
const availableCountries = ['Australia', "Bermuda", "Chile", "Denmark", "Estonia", "Fiji"];
export const StateOnlyForm = () => {
    const [username, setUsername] = useState('John');
    const [country, setCountry] = useState(availableCountries[0]);

    const onUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const onCountryChange = (event) => {
        setCountry(event.target.value);
    }
    count++;

    return (
        <div>
            <NameField onChange={onUsernameChange} username={username} />
            <hr/>
            <CountryField onChange={onCountryChange} selectableCountries={availableCountries} />
            <hr/>
            {username ? <WelcomeMessage username={username} /> : null}
            <hr/>
            {(country && username) ?<InfoPanel country={country} username={username} /> : null}
            <hr/>
            <Disclaimer />
            <hr/>
            <RenderCounter count={count} />
        </div>
    );
};