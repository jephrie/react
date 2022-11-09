import React, { useState } from 'react';
import { WelcomeMessage } from '../../common/components/welcome-message';
import { InfoPanel } from '../../common/components/info-panel';
import { NameField } from '../../common/components/name-field';
import { NicknameField } from '../../common/components/nickname-field';
import { CountryField } from '../../common/components/country-field';
import { Disclaimer } from '../../common/components/disclaimer';
import { FormResetButton } from '../../common/components/form-reset-button';

const availableCountries = ['Australia', "Bermuda", "Chile", "Denmark", "Estonia", "Fiji"];
const initialState = {
    username: 'Robert',
    nickname: 'Bob',
    country: availableCountries[0],
};

export const StateOnlyForm = () => {
    const [username, setUsername] = useState(initialState.username);
    const [nickname, setNickname] = useState(initialState.nickname);
    const [country, setCountry] = useState(initialState.country);

    const onUsernameChange = (username) => {
        setUsername(username);
    };
    const onNicknameChange = (nickname) => {
        setNickname(nickname);
    };
    const onCountryChange = (country) => {
        setCountry(country);
    };

    return (
        <div>
            <NameField onChange={onUsernameChange} username={username} />
            <NicknameField onChange={onNicknameChange} nickname={nickname} />
            <CountryField onChange={onCountryChange} selectableCountries={availableCountries} value={country} />
            {username ? <WelcomeMessage username={username} /> : null}
            {(country && username) ?<InfoPanel country={country} username={username} /> : null}
            <Disclaimer />
            <FormResetButton
                setUsername={() => setUsername(initialState.username)}
                setNickname={() => setNickname(initialState.nickname)}
                setCountry={() => setCountry(initialState.country)}
            />
        </div>
    );
};