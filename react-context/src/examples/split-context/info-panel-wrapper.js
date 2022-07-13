import React, { useContext } from 'react';
import { UserMetadataContext } from '../../common/user-metadata-context';
import { UserLocationContext } from '../../common/user-location-context';
import { InfoPanel } from '../../common/components/info-panel';
import { incrementRenderCount } from '../../service/render-tracker';

export const InfoPanelWrapper = () => {
    const {
        state: { username },
    } = useContext(UserMetadataContext);
    const {
        state: { country },
    } = useContext(UserLocationContext);
    incrementRenderCount('InfoPanelWrapper');

    return (
        <div>
            <InfoPanel country={country} username={username} />
        </div>
    );
};