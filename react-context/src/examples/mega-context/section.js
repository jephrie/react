import React, { useContext } from 'react';

import { AppContext } from '../../common/app-context';
import { WelcomeMessage } from '../../common/components/welcome-message';
import { InfoPanel } from '../../common/components/info-panel';
import { NameField } from '../../common/components/name-field';
import { CountryField } from '../../common/components/country-field';
import { incrementRenderCount } from '../../service/render-tracker';

const availableCountries = ['Australia', "Bermuda", "Chile", "Denmark", "Estonia", "Fiji"];
export const FormSection = () => {
    const {
        state: {
            username,
            country,
        },
        onUsernameChange,
        onCountryChange,
    } = useContext(AppContext);
    incrementRenderCount('FormSection');

    return (
        <div>
            <NameField onChange={onUsernameChange} username={username} />
            <CountryField onChange={onCountryChange} selectableCountries={availableCountries} />
            {username ? <WelcomeMessage username={username} /> : null}
            {(country && username) ?<InfoPanel country={country} username={username} /> : null}
        </div>
    );
};