import React, { useContext } from 'react';
import { UserMetadataContext } from '../../common/user-metadata-context';
import { NameField } from '../../common/components/name-field';

export const NameFieldWrapper = () => {
    const {
        state: { username },
        onUsernameChange,
    } = useContext(UserMetadataContext);

    return <NameField onChange={onUsernameChange} username={username} />;
};