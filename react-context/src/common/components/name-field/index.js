import React, { useContext } from 'react';
import { UserMetadataContext } from '../../user-metadata-context';

export const NameField = ({
    onChange,
    username,
}) => {
    return (
        <div>
            <p>
                Name: <input type="text" onChange={(event) => onChange(event.target.value)} value={username} />
            </p>
        </div>
    );
};

export const NameFieldWrapper = () => {
    const {
        state: { username },
        onUsernameChange,
    } = useContext(UserMetadataContext);

    return <NameField onChange={onUsernameChange} username={username} />;
};