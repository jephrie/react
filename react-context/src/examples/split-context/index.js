import React from 'react';
import { WelcomeMessageWrapper } from './welcome-message-wrapper';
import { InfoPanelWrapper } from './info-panel-wrapper';
import { NameFieldWrapper } from './name-field-wrapper';
import { CountryFieldWrapper } from './country-field-wrapper';
import { Disclaimer } from '../../common/components/disclaimer';
import { RenderCounter } from '../../common/components/render-counter';
import { UserMetadataContextProvider } from '../../common/user-metadata-context';
import { UserLocationContextProvider } from '../../common/user-location-context';

let count = 0;
export const SplitContextForm = () => {
    count++;

    return (
        <div>
            <UserMetadataContextProvider>
                <NameFieldWrapper />
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
            <hr/>
            <RenderCounter count={count} prefix={'Form render count: '} />
        </div>
    );
};







