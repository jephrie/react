import React, { useContext } from 'react';
import { WelcomeMessage } from '../../common/components/welcome-message';
import { InfoPanel } from '../../common/components/info-panel';
import { NameField } from '../../common/components/name-field';
import { NicknameField } from '../../common/components/nickname-field';
import { CountryField, availableCountries } from '../../common/components/country-field';
import { Disclaimer } from '../../common/components/disclaimer';
import { FormResetButtonWithReset } from '../../common/components/form-reset-button';
import { UserContextProviderWithState, UserMutatorsContextWithState, UserContextWithState } from '../../common/user-context-with-state';

export const SplitContextByMutatorsCaveatForm = () => {
    return (
        <div>
            <p>Caveat - using local component state to store mutators will cause a re-render when the state changes, effectively making the context useless.</p>
            <p>Changing the nickname will can an unnecessary re-render just like the mega context example.</p>
            <UserContextProviderWithState>
                <SplitContextByMutatorsCaveatInner />
            </UserContextProviderWithState>
            <Disclaimer />
        </div>
    );
};

const SplitContextByMutatorsCaveatInner = () => {
    const {
        onUsernameChange,
        onNicknameChange,
        onCountryChange,
        onReset,
    } = useContext(UserMutatorsContextWithState);
    const {
        username,
        nickname,
        country,
    } = useContext(UserContextWithState);

    return (
        <div>
            <NameField onChange={onUsernameChange} username={username} />
            <NicknameField nickname={nickname} onChange={onNicknameChange} />
            <CountryField onChange={onCountryChange} selectableCountries={availableCountries} value={country} />
            <WelcomeMessage username={username} />
            <InfoPanel country={country} username={username} />
            <Disclaimer />
            <FormResetButtonWithReset onReset={onReset} />
        </div>
    );
};