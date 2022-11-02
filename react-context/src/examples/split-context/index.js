import React from 'react';
import { WelcomeMessageWrapper } from '../../common/components/welcome-message';
import { InfoPanelWrapper } from '../../common/components/info-panel';
import { NameFieldWrapper } from '../../common/components/name-field';
import { CountryFieldWrapper } from '../../common/components/country-field';
import { Disclaimer } from '../../common/components/disclaimer';
import { UserMetadataContextProvider } from '../../common/user-metadata-context';
import { UserLocationContextProvider } from '../../common/user-location-context';

export const SplitContextForm = () => {
    return (
        <>
            <UserMetadataContextProvider>
                <UserLocationContextProvider>
                    <NameFieldWrapper />
                    <CountryFieldWrapper />
                    <WelcomeMessageWrapper />
                    <InfoPanelWrapper />
                </UserLocationContextProvider>
            </UserMetadataContextProvider>
            <Disclaimer />
        </>
    );
};