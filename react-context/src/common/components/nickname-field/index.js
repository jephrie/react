import React, { useContext } from 'react';
import { UserMetadataContext } from '../../user-metadata-context';

export const NicknameField = ({
    onChange,
    nickname,
}) => {
    return (
        <div>
            <p>
                Nickname: <input type="text" onChange={onChange} value={nickname} />
            </p>
        </div>
    );
};

export const NicknameFieldWrapper = () => {
    const {
        state: { nickname },
        onNicknameChange,
    } = useContext(UserMetadataContext);

    return <NicknameField onChange={onNicknameChange} nickname={nickname} />;
};