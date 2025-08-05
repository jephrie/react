import React, { useContext } from 'react';
import { WelcomeMessage } from '../../common/components/welcome-message';
import { NameField } from '../../common/components/name-field';
import { NicknameField } from '../../common/components/nickname-field';
import { CountryFieldNoValue, availableCountries } from '../../common/components/country-field';
import { Disclaimer } from '../../common/components/disclaimer';
import { FormResetButtonWithReset } from '../../common/components/form-reset-button';
import { UserContextProviderWithState, UserMutatorsContextWithState, UserContextWithState } from '../../common/user-context-with-state';

export const SplitContextByMutatorsCaveatForm = () => {
    return (
        <div>
            <p>Caveat - using local component state to store mutators will cause a re-render when the state changes, effectively making the context useless.</p>
            <p>Changing the nickname will cause unnecessary re-renders just like the mega context example.</p>
            <p>Splitting by mutators would be desirable because mutators dont really change. However each mutator could be tied to local component state and therefore cause a lot of rerenders.</p>
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
    } = useContext(UserContextWithState);

    return (
        <div>
            <NameField onChange={onUsernameChange} username={username} />
            <NicknameField nickname={nickname} onChange={onNicknameChange} />
            <CountryFieldNoValue onChange={onCountryChange} selectableCountries={availableCountries} />
            <WelcomeMessage username={username} />
            <FormResetButtonWithReset onReset={onReset} />
        </div>
    );
};