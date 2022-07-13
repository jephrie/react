import React, { useContext } from 'react';
import { RenderCounter } from "../../common/components/render-counter";
import { UserMetadataContext } from '../../common/user-metadata-context';
import { WelcomeMessage } from '../../common/components/welcome-message';

let count = 0;

export const WelcomeMessageWrapper = () => {
    const {
        state: { username },
    } = useContext(UserMetadataContext);
    count++;
    return (
        <div>
            <WelcomeMessage username={username} />
            <hr/>
            <RenderCounter count={count} prefix={'WelcomeMessageWrapper render count: '} />
            <hr/>
        </div>
    );
};