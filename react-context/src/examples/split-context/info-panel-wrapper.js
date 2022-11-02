import React, { useContext } from 'react';
import { UserMetadataContext } from '../../common/user-metadata-context';
import { UserLocationContext } from '../../common/user-location-context';
import { InfoPanel } from '../../common/components/info-panel';

export const InfoPanelWrapper = () => {
    const {
        state: { username },
    } = useContext(UserMetadataContext);
    const {
        state: { country },
    } = useContext(UserLocationContext);

    return <InfoPanel country={country} username={username} />;
};