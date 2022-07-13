import React, { useContext } from 'react';
import { RenderCounter } from "../../common/components/render-counter";
import { UserMetadataContext } from '../../common/user-metadata-context';
import { NameField } from '../../common/components/name-field';

let count = 0;

export const NameFieldWrapper = () => {
    const {
        state: { username },
        onUsernameChange,
    } = useContext(UserMetadataContext);
    count++;
    return (
        <div>
            <NameField onChange={onUsernameChange} username={username} />
            <hr/>
            <RenderCounter count={count} prefix={'NameFieldWrapper render count: '} />
            <hr/>
        </div>
    );
};