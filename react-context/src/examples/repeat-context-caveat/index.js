import React from 'react';
import { WelcomeMessageWrapper } from '../../common/components/welcome-message';
import { InfoPanelWrapper } from '../../common/components/info-panel';
import { NameFieldWrapper } from '../../common/components/name-field';
import { NicknameFieldWrapper } from '../../common/components/nickname-field';
import { CountryFieldWrapper } from '../../common/components/country-field';
import { Disclaimer } from '../../common/components/disclaimer';
import { UserMetadataContextProvider } from '../../common/user-metadata-context';
import { UserLocationContextProvider } from '../../common/user-location-context';

export const RepeatContextCaveat = () => {
    return (
        <>
            <p>Caveat - using the same provider several times will not update each instance of the provider.</p>
            <p>Only the closest context will be updated - <a style={{ color: 'white' }} target="_blank" rel="noreferrer" href="https://reactjs.org/docs/context.html#reactcreatecontext">sauce</a></p>
            <UserMetadataContextProvider>
                <NameFieldWrapper />
                <NicknameFieldWrapper />
            </UserMetadataContextProvider>
            <UserLocationContextProvider>
                <CountryFieldWrapper />
            </UserLocationContextProvider>
            <UserMetadataContextProvider>
                <WelcomeMessageWrapper />
            </UserMetadataContextProvider>
            <UserMetadataContextProvider>
                <UserLocationContextProvider>
                    <InfoPanelWrapper />
                </UserLocationContextProvider>
            </UserMetadataContextProvider>
            <Disclaimer />
        </>
    );
};