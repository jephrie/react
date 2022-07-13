import React, { useContext } from 'react';
import { RenderCounter } from "../../common/components/render-counter";
import { UserMetadataContext } from '../../common/user-metadata-context';
import { UserLocationContext } from '../../common/user-location-context';
import { InfoPanel } from '../../common/components/info-panel';

let count = 0;

export const InfoPanelWrapper = () => {
    const {
        state: { username },
    } = useContext(UserMetadataContext);
    const {
        state: { country },
    } = useContext(UserLocationContext);
    count++;
    return (
        <div>
            <InfoPanel country={country} username={username} />
            <hr/>
            <RenderCounter count={count} prefix={'InfoPanelWrapper render count: '} />
            <hr/>
        </div>
    );
};