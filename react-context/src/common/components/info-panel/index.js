import React, { useContext } from 'react';
import { UserMetadataContext } from '../../user-metadata-context';
import { UserLocationContext } from '../../user-location-context';

export const InfoPanel = ({
    username,
    country,
}) => {
    return (
        <div>
            <p>This is the data that we have on you.</p>
            <p>Name: {username}</p>
            <p>Country: {country}</p>
        </div>
    );
};

export const InfoPanelWrapper = () => {
    const {
        state: { username },
    } = useContext(UserMetadataContext);
    const {
        state: { country },
    } = useContext(UserLocationContext);

    return <InfoPanel country={country} username={username} />;
};