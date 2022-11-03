import React, { useContext } from 'react';

import { AppContext } from '../../common/app-context';
import { WelcomeMessage } from '../../common/components/welcome-message';
import { InfoPanel } from '../../common/components/info-panel';
import { NameField } from '../../common/components/name-field';
import { NicknameField } from '../../common/components/nickname-field';
import { CountryField } from '../../common/components/country-field';

const availableCountries = ['Australia', "Bermuda", "Chile", "Denmark", "Estonia", "Fiji"];
export const FormSection = () => {
    const {
        state: {
            username,
            nickname,
            country,
        },
        onUsernameChange,
        onNicknameChange,
        onCountryChange,
    } = useContext(AppContext);

    return (
        <div>
            <NameField onChange={onUsernameChange} username={username} />
            <NicknameField onChange={onNicknameChange} nickname={nickname} />
            <CountryField onChange={onCountryChange} selectableCountries={availableCountries} />
            {username ? <WelcomeMessage username={username} /> : null}
            {(country && username) ?<InfoPanel country={country} username={username} /> : null}
        </div>
    );
};