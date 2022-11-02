import React, { useContext } from 'react';
import { UserMetadataContext } from '../../user-metadata-context';

export const WelcomeMessage = ({
    username,
}) => {
    return (
        <div>
            <p>Hi! Welcome back {username}.</p>
        </div>
    );
};

export const WelcomeMessageWrapper = () => {
    const {
        state: { username },
    } = useContext(UserMetadataContext);

    return (
        <div>
            <WelcomeMessage username={username} />
        </div>
    );
};