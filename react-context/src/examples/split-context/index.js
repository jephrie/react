import React, { useContext } from 'react';
import { WelcomeMessage } from '../../common/components/welcome-message';
import { InfoPanel } from '../../common/components/info-panel';
import { NameField } from '../../common/components/name-field';
import { NicknameField } from '../../common/components/nickname-field';
import { CountryField, availableCountries } from '../../common/components/country-field';
import { Disclaimer } from '../../common/components/disclaimer';
import { FormResetButtonWithReset } from '../../common/components/form-reset-button';
import {
    UserContextProvider,
    UserNameContext,
    UserNicknameContext,
    LocationContext,
    UserMutatorsContext
} from '../../common/user-context';

export const SplitContextForm = () => {
    return (
        <div>
            <SplitContextFormInner />
            <Disclaimer />
        </div>
        
    );
};

const SplitContextFormInner = () => {
    return (
        <UserContextProvider>
            <NameFieldWrapper />
            <NicknameFieldWrapper />
            <CountryFieldWrapper />
            <WelcomeMessageWrapper />
            <InfoPanelWrapper />
            <ResetButtonWrapper />
        </UserContextProvider>
    );
};

const NameFieldWrapper = () => {
    const username = useContext(UserNameContext);
    const {
        onUsernameChange,
    } = useContext(UserMutatorsContext);
    return <NameField onChange={onUsernameChange} username={username} />;
};

const NicknameFieldWrapper = () => {
    const nickname = useContext(UserNicknameContext);
    const {
        onNicknameChange,
    } = useContext(UserMutatorsContext);
    return <NicknameField nickname={nickname} onChange={onNicknameChange} />;
};

const CountryFieldWrapper = () => {
    const country = useContext(LocationContext);
    const {
        onCountryChange,
    } = useContext(UserMutatorsContext);
    return <CountryField onChange={onCountryChange} selectableCountries={availableCountries} value={country} />;
};

const WelcomeMessageWrapper = () => {
    const username = useContext(UserNameContext);
    return <WelcomeMessage username={username} />;
};

const InfoPanelWrapper = () => {
    const username = useContext(UserNameContext);
    const country = useContext(LocationContext);
    return <InfoPanel country={country} username={username} />;
};

const ResetButtonWrapper = () => {
    const {
        onReset,
    } = useContext(UserMutatorsContext);
    return <FormResetButtonWithReset onReset={onReset} />
};