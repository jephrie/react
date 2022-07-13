import React, { useContext } from 'react';
import { UserMetadataContext } from '../../common/user-metadata-context';
import { WelcomeMessage } from '../../common/components/welcome-message';
import { incrementRenderCount } from '../../service/render-tracker';

export const WelcomeMessageWrapper = () => {
    const {
        state: { username },
    } = useContext(UserMetadataContext);
    incrementRenderCount('WelcomeMessageWrapper');

    return (
        <div>
            <WelcomeMessage username={username} />
        </div>
    );
};