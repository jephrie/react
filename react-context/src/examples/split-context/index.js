import React, { useContext } from 'react';
import { WelcomeMessage } from '../../common/components/welcome-message';
import { InfoPanel } from '../../common/components/info-panel';
import { NameField } from '../../common/components/name-field';
import { NicknameField } from '../../common/components/nickname-field';
import { CountryField, availableCountries } from '../../common/components/country-field';
import { Disclaimer } from '../../common/components/disclaimer';
import { FormResetButtonWithReset } from '../../common/components/form-reset-button';
import { UserContextProvider, UserContext, UserMutatorsContext } from '../../common/user-context';

export const SplitContextForm = () => {
    return (
        <UserContextProvider>
            <SplitContextFormInner />
            <Disclaimer />
        </UserContextProvider>
    );
};

const SplitContextFormInner = () => {
    return (
        <div>
            <NameFieldWrapper />
            <NicknameFieldWrapper />
            <CountryFieldWrapper />
            <WelcomeMessageWrapper />
            <InfoPanelWrapper />
            <ResetButtonWrapper />
        </div>
    );
};

const NameFieldWrapper = () => {
    const {
        username,
    } = useContext(UserContext);
    const {
        onUsernameChange,
    } = useContext(UserMutatorsContext);
    return <NameField onChange={onUsernameChange} username={username} />;
};

const NicknameFieldWrapper = () => {
    const {
        nickname,
    } = useContext(UserContext);
    const {
        onNicknameChange,
    } = useContext(UserMutatorsContext);
    return <NicknameField nickname={nickname} onChange={onNicknameChange} />;
};

const CountryFieldWrapper = () => {
    const {
        country,
    } = useContext(UserContext);
    const {
        onCountryChange,
    } = useContext(UserMutatorsContext);
    return <CountryField onChange={onCountryChange} selectableCountries={availableCountries} value={country} />;
};

const WelcomeMessageWrapper = () => {
    const {
        username,
    } = useContext(UserContext);
    return <WelcomeMessage username={username} />;
};

const InfoPanelWrapper = () => {
    const {
        username,
        country,
    } = useContext(UserContext);
    return <InfoPanel country={country} username={username} />;
};

const ResetButtonWrapper = () => {
    const {
        onReset,
    } = useContext(UserMutatorsContext);
    return <FormResetButtonWithReset onReset={onReset} />
};