import React from 'react';
import { WelcomeMessageWrapper } from './welcome-message-wrapper';
import { InfoPanelWrapper } from './info-panel-wrapper';
import { NameFieldWrapper } from './name-field-wrapper';
import { CountryFieldWrapper } from './country-field-wrapper';
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