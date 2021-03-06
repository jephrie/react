import React, { useState } from 'react';
import { WelcomeMessage } from '../../common/components/welcome-message';
import { InfoPanel } from '../../common/components/info-panel';
import { NameField } from '../../common/components/name-field';
import { CountryField } from '../../common/components/country-field';
import { Disclaimer } from '../../common/components/disclaimer';
import { RenderTrackerTable } from '../../common/components/render-tracker-table';
import { incrementRenderCount } from '../../service/render-tracker';

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
    incrementRenderCount('StateOnlyForm');

    return (
        <div>
            <NameField onChange={onUsernameChange} username={username} />
            <CountryField onChange={onCountryChange} selectableCountries={availableCountries} />
            {username ? <WelcomeMessage username={username} /> : null}
            {(country && username) ?<InfoPanel country={country} username={username} /> : null}
            <Disclaimer />
            <hr/>
            <RenderTrackerTable />
        </div>
    );
};