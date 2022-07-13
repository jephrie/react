import React from 'react';
import { WelcomeMessageWrapper } from './welcome-message-wrapper';
import { InfoPanelWrapper } from './info-panel-wrapper';
import { NameFieldWrapper } from './name-field-wrapper';
import { CountryFieldWrapper } from './country-field-wrapper';
import { Disclaimer } from '../../common/components/disclaimer';
import { UserMetadataContextProvider } from '../../common/user-metadata-context';
import { UserLocationContextProvider } from '../../common/user-location-context';
import { RenderTrackerTable } from '../../common/components/render-tracker-table';
import { incrementRenderCount } from '../../service/render-tracker';

export const SplitContextForm = () => {
    incrementRenderCount('SplitContextForm');

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
            <RenderTrackerTable />
        </div>
    );
};







