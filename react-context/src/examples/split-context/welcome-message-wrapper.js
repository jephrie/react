import React, { useContext } from 'react';
import { UserMetadataContext } from '../../common/user-metadata-context';
import { WelcomeMessage } from '../../common/components/welcome-message';

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