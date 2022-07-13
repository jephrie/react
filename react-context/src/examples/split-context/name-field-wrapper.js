import React, { useContext } from 'react';
import { UserMetadataContext } from '../../common/user-metadata-context';
import { NameField } from '../../common/components/name-field';
import { incrementRenderCount } from '../../service/render-tracker';

export const NameFieldWrapper = () => {
    const {
        state: { username },
        onUsernameChange,
    } = useContext(UserMetadataContext);
    incrementRenderCount('NameFieldWrapper');

    return (
        <div>
            <NameField onChange={onUsernameChange} username={username} />
        </div>
    );
};