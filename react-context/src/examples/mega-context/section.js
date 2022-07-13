import React, { useContext } from 'react';

import { AppContext } from '../../common/app-context';
import { WelcomeMessage } from '../../common/components/welcome-message';
import { InfoPanel } from '../../common/components/info-panel';
import { NameField } from '../../common/components/name-field';
import { CountryField } from '../../common/components/country-field';
import { RenderCounter } from '../../common/components/render-counter';

const availableCountries = ['Australia', "Bermuda", "Chile", "Denmark", "Estonia", "Fiji"];
let count = 0;
export const FormSection = () => {
    const {
        state: {
            username,
            country,
        },
        onUsernameChange,
        onCountryChange,
    } = useContext(AppContext);
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
            <RenderCounter count={count} prefix={'Form section render count: '} />
            <hr/>
        </div>
    );
};