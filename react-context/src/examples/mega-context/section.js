import React, { useContext } from 'react';

import { AppContext } from '../../common/app-context';
import { WelcomeMessage } from '../../common/components/welcome-message';
import { InfoPanel } from '../../common/components/info-panel';
import { NameField } from '../../common/components/name-field';
import { NicknameField } from '../../common/components/nickname-field';
import { CountryField } from '../../common/components/country-field';
import { FormResetButtonWithReset } from '../../common/components/form-reset-button';

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
        onReset,
    } = useContext(AppContext);

    return (
        <div>
            <NameField onChange={onUsernameChange} username={username} />
            <NicknameField onChange={onNicknameChange} nickname={nickname} />
            <CountryField onChange={onCountryChange} selectableCountries={availableCountries} value={country} />
            {username ? <WelcomeMessage username={username} /> : null}
            {(country && username) ? <InfoPanel country={country} username={username} /> : null}
            <FormResetButtonWithReset onReset={onReset}>Reset</FormResetButtonWithReset>
        </div>
    );
};