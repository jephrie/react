import React, { useState } from 'react';
import { WelcomeMessage } from '../../common/components/welcome-message';
import { InfoPanel } from '../../common/components/info-panel';
import { NameField } from '../../common/components/name-field';
import { NicknameField } from '../../common/components/nickname-field';
import { CountryField } from '../../common/components/country-field';
import { Disclaimer } from '../../common/components/disclaimer';

const availableCountries = ['Australia', "Bermuda", "Chile", "Denmark", "Estonia", "Fiji"];
export const StateOnlyForm = () => {
    const [username, setUsername] = useState('Robert');
    const [nickname, setNickname] = useState('Bob');
    const [country, setCountry] = useState(availableCountries[0]);

    const onUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const onNicknameChange = (event) => {
        setNickname(event.target.value);
    };
    const onCountryChange = (event) => {
        setCountry(event.target.value);
    };

    return (
        <div>
            <NameField onChange={onUsernameChange} username={username} />
            <NicknameField onChange={onNicknameChange} nickname={nickname} />
            <CountryField onChange={onCountryChange} selectableCountries={availableCountries} />
            {username ? <WelcomeMessage username={username} /> : null}
            {(country && username) ?<InfoPanel country={country} username={username} /> : null}
            <Disclaimer />
        </div>
    );
};